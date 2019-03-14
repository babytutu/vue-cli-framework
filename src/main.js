import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { apis } from './utils/apis'
// 精简echarts
import './plugins/echarts'
import './plugins/axios'
import './plugins/element'

import './components'

import './style/style.styl'

// 增加仅开发模式用的logger工具
import Logger from './utils/logger'
Vue.use(Logger)

Vue.config.productionTip = false

Vue.prototype.$apis = apis

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
