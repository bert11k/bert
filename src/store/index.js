import {createStore} from 'vuex'
import firebase from 'firebase/app'

export default createStore({
  state: {
    user: {
      isLogin: false,
      uId: null,
      userData: null
    }
  },
  mutations: {
    setUser(state, {uid}) {
      state.user.isLogin = true
      state.user.uId = uid
    },
    clearInfo(state){
      state.user = {}
      state.user.isLogin = false
    },
    setUserData(state, value){
      state.userData = value
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
        await firebase.auth().signOut();
        commit("clearInfo");
      } catch (e) {
        throw e
      }
    }
  },
  modules: {},
  getters: {
    isLogin: s => s.user.isLogin,
    getUid: s => s.user.uId,
    getUserData: s => s.userData
  }
})
