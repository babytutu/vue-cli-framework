import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// 精简echarts
import './plugins/echarts'
import './plugins/axios'
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
