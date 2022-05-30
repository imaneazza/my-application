import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/Store'
import {getUserInformation} from './services/servicesList'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
Vue.config.productionTip = false
Vue.use(ElementUI)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted () {
    getUserInformation(1).then(response => {
      this.$store.dispatch('updateUser', response.data)
    })
  }
})
