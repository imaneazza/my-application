import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/Store'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        console.log(response.data)
        this.$store.dispatch('updateUser', response.data)
      })
  }
})
