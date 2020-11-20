import Vue from 'vue'
import AuthWrapper from './components/AuthWrapper.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(AuthWrapper)
}).$mount('#app')
