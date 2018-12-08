import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { apis } from './utils/apis'
// 精简echarts
import './plugins/echarts'
import './plugins/axios'
import './plugins/element'

Vue.config.productionTip = false
Vue.prototype.$apis = apis

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
