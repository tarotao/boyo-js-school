import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/boyo-bord/databases/(default)/documents"

new Vue({
  render: h => h(App),
}).$mount('#app')
