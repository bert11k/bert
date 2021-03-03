import {createStore} from 'vuex'
import firebase from 'firebase/app'

export default createStore({
  state: {
    catalog: [],
    user: {
      isLogin: false,
      uId: null,
      userData: null,
    }
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
        const userData =
            (
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
      const data = (await firebase.database().ref(`/catalog`).get()).val()
      commit('setCatalog', data)
    },
    async createUser({dispatch, commit, getters}, {email, password, fio, phone, phoneWork, position}) {
      try {
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
              position
            })
        await firebase.auth().signOut()
        commit('clearInfo')
      } catch (e) {
        throw e
      }
    },
    async createProduct({dispatch, commit, getters}, {title, num, cost, category, type}) {
      try {
        await firebase
            .database()
            .ref(`/catalog`)
            .push().set(({
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

    async createTransaction({dispatch, commit}, {title, date, address, status, type}) {
      try {
        await firebase
            .database()
            .ref(`/transactions`)
            .push().set({
        
              title,
              date,
              address,
              status,
              type,
            })
      } catch (e) {
        throw e
      }
    },

    async savePhoto({}, file) {
      const ref = firebase.storage().ref(`images/${file.name}`)
      const task = ref.put(file)
    },
    async saveProductImg({}, file) {
      const ref = firebase.storage().ref(`product/${file.name}`)
      const task = ref.put(file)
    },

  },
  modules: {},
  getters: {
    isLogin: s => s.user.isLogin,
    getUid: s => s.user.uId,
    getUserData: s => s.userData,
    getCatalog: s => s.catalog
  }
})
