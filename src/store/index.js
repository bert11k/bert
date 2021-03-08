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
    deal: null,
    completedDeals: null,
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
    setTasks(state, value) {
      state.tasks = value
    },
    setDeal(state, value) {
      state.deal = value
    },
    setCompletedDeals(state, value) {
      state.completedDeals = value
    }
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
        commit('setUserData', userData)
        return userData
      } catch (e) {
        throw e
      }
    },
    async fetchCatalog({commit}) {
      const data = (
          await firebase
              .database()
              .ref(`/catalog`)
              .get()
      ).val()
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
        {email, password, fio, phone, phoneWork, position}
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
            })
        await firebase.auth().signOut()
        commit('clearInfo')
        commit('setUser', userTmp)
        await dispatch('fetchUserData')
      } catch (e) {
        throw e
      }
    },
    async createProduct(
        {dispatch, commit},
        {title, num, cost, category, type}
    ) {
      try {
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
        })
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
        data = (await firebase.database().ref(`/completedDeals/${uid}/${year}/${month}`).get()).val()
      } else {
        data = (await firebase.database().ref(`/completedDeals/${uid}/${year}`).get()).val()
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
      if (type === 'week' || type === 'month') {
        await dispatch('fetchCompletedDeal', {uid, year, month})
        if (type === 'week') {
          let deals = getters.getCompletedDeals
          deals = Object.values(deals).forEach(deal => {
            if (Date.now() - Date.parse(deal.date) <= 604800000) {
              profit += deal.profit
            }
          })
        } else {
          const deals = getters.getCompletedDeals
          Object.values(deals).forEach(deal => {
            profit += deal.profit
          })
        }

      } else if (type === 'year') {
        await dispatch('fetchCompletedDeal', {uid, year})
        const months = getters.getCompletedDeals
        Object.values(months).forEach(month => {
          Object.values(month).forEach(deal => {
            profit += deal.profit
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
            .ref(`/completedDeals/${uid}/${year}/${month}/${deal.key}`)
            .set(deal)
      } catch (e) {
        throw e
      }
    },
    async fetchTransactions({commit}) {
      let data = (
          await firebase
              .database()
              .ref(`/transactions`)
              .get()
      ).val()
      data = Object.values(data).filter(item => +item.status !== 3 && +item.status !== 4)
      commit('setTransactions', data)
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
    async fetchDeal({commit}, key) {
      const data = (await firebase.database().ref(`/transactions/${key}`).get()).val()
      commit('setDeal', data)
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
    getTasks: s => s.tasks,
    getDeal: s => s.deal,
    getCompletedDeals: s => s.completedDeals,
  }
})