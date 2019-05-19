import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'
import ToggleButton from 'vue-js-toggle-button'
 
Vue.config.productionTip = false

Vue.use(ToggleButton)
Vue.use(Notifications)
Vue.use(VModal, { dynamic: true })

new Vue({
  render: h => h(App),
}).$mount('#app')

