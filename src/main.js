import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'
import './plugins/element.js'
import './assets/font_47unbom77di/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8888'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
