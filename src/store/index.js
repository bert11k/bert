import { createStore } from 'vuex'
import firebase from "firebase/app";

export default createStore({
  state: {
    user: {
      isLogin: false,
      uId: null
    }
  },
  mutations: {
    setUser(state, {uid}){
      state.user.isLogin = true
      state.user.uId = uid
    }
  },
  actions: {
    async login({commit}, {email, password}){
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('setUser', firebase.auth().currentUser);
      } catch (e) {
        throw e;
      }
    },
    async fetchUserData({commit, getters}){
      try {
        const uid = getters.getUid
        if(uid === null){
          throw 'error'
        }
        const userData =
          (
            await firebase
              .database()
              .ref(`/users/${uid}`)
              .once("value")
          ).val();
        return userData
      }catch (e) {
        throw e
      }
    }
  },
  modules: {
  },
  getters:{
    isLogin: s => s.user.isLogin,
    getUid: s=> s.user.uId
  }
})
