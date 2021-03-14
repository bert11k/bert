import {createStore} from 'vuex'
import firebase from 'firebase/app'

export default createStore({
  state: {
    catalog: [],
    user: {
      isLogin: false,
      uId: null,
      userData: null,
    },
    tasks: null,
    transactions: null,
    transactionsComp: null,
    transactionsNotComp: null,
    deal: null,
    completedDeals: null,
    reports: null,
    reportDeals: null,
    planTarget: null,
    dealers: null,
  },
  mutations: {
    setCatalog(state, value) {
      state.catalog = value
    },
    setUser(state, {uid}) {
      state.user.isLogin = true
      state.user.uId = uid
    },
    clearInfo(state) {
      state.user = {}
      state.user.isLogin = false
    },
    setUserData(state, value) {
      state.userData = value
    },
    signOut(state) {
      state.user.isLogin = false
      state.user.uId = null
      state.user.useData = null
    },
    setTransactions(state, value) {
      state.transaction = value
    },
    setCompleteTransactions(state, value) {
      state.transactionsComp = value
    },
    setNotCompleteTransactions(state, value) {
      state.transactionsNotComp = value
    },
    setTasks(state, value) {
      state.tasks = value
    },
    setDeal(state, value) {
      state.deal = value
    },
    setCompletedDeals(state, value) {
      state.completedDeals = value
    },
    setReports(state, value) {
      state.reports = value
    },
    setReportDeals(state, value) {
      state.reportDeals = value
    },
    setPlanTarget(state, value){
      state.planTarget = value
    },
    setDealers(state, value){
      state.dealers = value
    },
  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', firebase.auth().currentUser)
        await dispatch('fetchUserData')
      } catch (e) {
        throw e
      }
    },
    async fetchUserData({commit, getters}) {
      try {
        const uid = getters.getUid
        if (uid === null) {
          throw 'error'
        }
        const userData = (
            await firebase
                .database()
                .ref(`/users/${uid}`)
                .once('value')
        ).val()
        userData.img = await firebase.storage().ref(`images`).child(`${userData.img}`).getDownloadURL()
        commit('setUserData', userData)
        return userData
      } catch (e) {
        throw e
      }
    },
    async fetchCatalog({commit}) {
      let data = (
          await firebase
              .database()
              .ref(`/catalog`)
              .get()
      ).val()
      for (const item of Object.values(data)) {
        item.img = await firebase.storage().ref(`product`).child(`${item.photoName}`).getDownloadURL()
      }
      commit('setCatalog', data)
    },
    async changeCatalogNum({commit}, {key, num}) {
      const data =
          await firebase
              .database()
              .ref(`/catalog/${key}`)
              .update({num})
      commit('setCatalog', data)
    },
    async createUser(
        {dispatch, commit, getters},
        {email, password, fio, phone, phoneWork, position, photo}
    ) {
      try {
        const userTmp = {uid: getters._user.uId}
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await firebase.auth().currentUser.uid
        await firebase
            .database()
            .ref(`/users/${uid}/`)
            .set({
              email,
              fio,
              phonehome: phone,
              phonework: phoneWork,
              position,
              img: photo,
            })
        // await firebase.auth().signOut()
        commit('clearInfo')
        commit('setUser', userTmp)
        await dispatch('fetchUserData')
      } catch (e) {
        throw e
      }
    },
    async createProduct(
        {dispatch, commit, getters},
        {title, num, cost, category, type, photoName}
    ) {
      try {
        let done
        const prevStorage = Object.values(getters.getCatalog)
        for (const item of prevStorage) {
          if (item.title === title) {
            await firebase
                .database()
                .ref(`/catalog/${item.key}`).set({
                  key: item.key,
                  title,
                  num: +item.num + +num,
                  cost,
                  category,
                  type,
                  photoName,
                })
            done = true
            break
          }
        }
        if (!done) {
          const ref = await firebase
              .database()
              .ref(`/catalog`)
              .push()

          const key = ref.key
          ref.set({
            key,
            title,
            num,
            cost,
            category,
            type,
            photoName,
          })
        }

      } catch (e) {
        throw e
      }
    },

    async createTask(
        {dispatch, commit},
        {title, date, contact, description}
    ) {
      try {
        await firebase
            .database()
            .ref(`/task`)
            .push()
            .set({
              title,
              date,
              contact,
              description,
            })
      } catch (e) {
        throw e
      }
    },

    async createTransaction({dispatch, commit}, {title, date, address, status, type, customer, num, subjects}) {
      try {
        const ref = await firebase
            .database()
            .ref(`/transactions`)
            .push()
        const key = ref.key
        await ref.set({
          key,
          num,
          customer,
          title,
          date,
          address,
          status,
          type,
          subjects,
        })
      } catch (e) {
        throw e
      }
    },
    async fetchCompletedDeal({dispatch, commit}, {uid, year, month}) {
      let data
      if (month) {
        data = (await firebase.database().ref(`/users/${uid}/completedDeals/${year}/${month}`).get()).val()
      } else {
        data = (await firebase.database().ref(`/users/${uid}/completedDeals/${year}`).get()).val()
      }
      commit('setCompletedDeals', data)
    },
    async createReport(
        {dispatch, commit, getters},
        {title, type}
    ) {
      const uid = getters.getUid,
          year = (new Date()).getFullYear(),
          month = (new Date()).toLocaleString('en-US', {month: 'long'})
      let profit = 0
      let dealsToBD = []
      if (type === 'week' || type === 'month') {
        await dispatch('fetchCompletedDeal', {uid, year, month})
        if (type === 'week') {
          let deals = getters.getCompletedDeals
          deals = Object.values(deals).forEach(deal => {
            if (Date.now() - Date.parse(deal.date) <= 604800000) {
              profit += deal.profit
              dealsToBD.push(deal.key)
            }
          })
        } else {
          const deals = getters.getCompletedDeals
          Object.values(deals).forEach(deal => {
            profit += deal.profit
            dealsToBD.push(deal.key)
          })
        }

      } else if (type === 'year') {
        await dispatch('fetchCompletedDeal', {uid, year})
        const months = getters.getCompletedDeals
        Object.values(months).forEach(month => {
          Object.values(month).forEach(deal => {
            profit += deal.profit
            dealsToBD.push(deal.key)
          })
        })
      }

      try {
        const ref = await firebase
            .database()
            .ref(`/reports/${uid}/${year}`)
            .push()
        const key = ref.key
        ref.set({
          key,
          title,
          date: Date.now(),
          profit,
          type,
          worker: uid,
          deals: dealsToBD,
        })
      } catch (e) {
        throw e
      }
    },
    async completeDeal({getters}, deal) {
      const uid = getters.getUid,
          year = (new Date()).getFullYear(),
          month = (new Date()).toLocaleString('en-US', {month: 'long'})
      try {
        await firebase
            .database()
            .ref(`/users/${uid}/completedDeals/${year}/${month}/${deal.key}`)
            .set(deal)
      } catch (e) {
        throw e
      }
    },
    async fetchAllTransactions({commit}) {
      let data = (
          await firebase
              .database()
              .ref(`/transactions`)
              .get()
      ).val()
      data = Object.values(data)
      commit('setTransactions', data)
    },
    async fetchTransactions({commit, dispatch, getters}) {
      await dispatch('fetchAllTransactions')
      let data = getters.getTransactions
      data = data.filter(item => +item.status !== 3 && +item.status !== 4)
      commit('setNotCompleteTransactions', data)
    },
    async fetchCompleteTransactions({commit, dispatch, getters}) {
      await dispatch('fetchAllTransactions')
      let data = getters.getTransactions
      data = data.filter(deal => +deal.status === 3)
      commit('setCompleteTransactions', data)
    },
    async fetchTasks({commit}) {
      const data = (
          await firebase
              .database()
              .ref(`/task`)
              .get()
      ).val()
      commit('setTasks', data)
    },
    async fetchWorker({}, uid) {
      return (await firebase.database().ref(`/users/${uid}`).get()).val().fio
    },
    async fetchReports({commit, dispatch}) {
      const data = (await firebase.database().ref(`/reports`).get()).val()
      let result = []
      const reportTypos = {
        week: 'Неделя',
        month: 'Месяц',
        year: 'Год',
      }
      for (const user of Object.values(data)) {
        const year = (new Date()).toLocaleString('en-US', {year: 'numeric'})
        let res = []
        for (const report of Object.values(user[year])) {
          report.date = new Date(report.date).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'})
          report.workerKey = report.worker
          report.worker = await dispatch('fetchWorker', report.worker)
          report.type = reportTypos[report.type]
          res.push(report)
        }
        result.push(res)
      }
      commit('setReports', ...result)
    },
    async fetchReportDeals({commit, dispatch, getters}, {key, worker}) {
      const year = (new Date()).toLocaleString('en-US', {year: 'numeric'})
      const data = (await firebase.database().ref(`reports/${worker}/${year}/${key}`).get()).val().deals
      let deals = []
      for (const deal of data) {
        await dispatch('fetchDeal', deal)
        deals.push(getters.getDeal)
      }

      commit('setReportDeals', deals)
    },
    async createPlaningTarget({commit}, {target, type}) {
      const types = ['Year', 'Month', 'Week']
      const date = types[type]
      await firebase.database().ref(`/planing/${date}`).set({
        target,
      })
      commit('setPlanTarget', target)
    },
    async fetchTarget({commit}, type){
      const types = ['Year', 'Month', 'Week']
      const date = types[type]
      const data = (await firebase.database().ref(`/planing/${date}`).get()).val()
      commit('setPlanTarget', data.target)
    },
    async fetchDeal({commit}, key) {
      const data = (await firebase.database().ref(`/transactions/${key}`).get()).val()
      commit('setDeal', data)
    },
    async fetchDealers({commit}){
      const data = (await firebase.database().ref(`/users`).get()).val()
      let dealers = Object.values(data).filter(user => user.position.toLowerCase().trim() === "дилер")
      for(const dealer of dealers){
        dealer.img = await firebase.storage().ref(`images`).child(`${dealer.img}`).getDownloadURL()
      }
      commit('setDealers', dealers)
    },
    async changeDealStatus({commit}, deal) {
      await firebase.database().ref(`/transactions/${deal.key}`).set(deal)
    },
    async savePhoto({}, file) {
      const ref = await firebase.storage().ref(`images/${file.name}`)
      await ref.put(file)
    },
    async saveProductImg({}, file) {
      const ref = await firebase.storage().ref(`product/${file.name}`)
      await ref.put(file)
    },
  },
  modules: {},
  getters: {
    _user: s => s.user,
    isLogin: s => s.user.isLogin,
    getUid: s => s.user.uId,
    getUserData: s => s.userData,
    getCatalog: s => s.catalog,
    getTransactions: s => s.transaction,
    getCompleteTransactions: s => s.transactionsComp,
    getNotCompleteTransactions: s => s.transactionsNotComp,
    getTasks: s => s.tasks,
    getDeal: s => s.deal,
    getCompletedDeals: s => s.completedDeals,
    getReports: s => s.reports,
    getReportDeals: s => s.reportDeals,
    getPlanTarget: s => s.planTarget,
    getDealers: s => s.dealers,
  }
})