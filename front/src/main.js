import Vue from 'vue'
import AuthWrapper from './components/AuthWrapper.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AuthWrapper)
}).$mount('#app')
