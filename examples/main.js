import Vue from 'vue'
import App from './App.vue'
import OrangeUI from '../packages'

Vue.config.productionTip = false
Vue.use(OrangeUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
