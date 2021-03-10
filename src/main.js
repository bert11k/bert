import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Toaster from '@meforma/vue-toaster'
import firebase from 'firebase'
import VueHtmlToPaper from './plugins/VueHtmlToPaper'
import 'firebase/database'
import 'firebase/storage'



const config = {
  apiKey: 'AIzaSyAIgQOB9LHJA6bbAr3zgW9fk6mxVAu4Vrc',
  authDomain: 'kpdp-db010.firebaseapp.com',
  databaseURL: 'https://kpdp-db010.firebaseio.com',
  projectId: 'kpdp-db010',
  storageBucket: 'kpdp-db010.appspot.com',
  messagingSenderId: '836300345681',
  appId: '1:836300345681:web:1b9e5c3ac3f94980f08370'
}
firebase.initializeApp(config)
firebase.storage()

const app = createApp(App)
app.use(VueHtmlToPaper)
app.use(store).use(router).use(Toaster, {position: 'top-right'}).mount('#app')
