import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Toast}  from 'vant'

Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
