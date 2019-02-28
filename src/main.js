import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { apis } from './utils/apis'
// 精简echarts
import './plugins/echarts'
import './plugins/axios'
import './plugins/element'

import './style/style.styl'

// 音频播放组件,全局注册，方便使用
import vaplayer from '@/components/aplayer/VueAplayer.vue'
import tableModel from '@/components/table/table.vue'

// 增加仅开发模式用的logger工具
import Logger from './utils/logger'

Vue.component('vaplayer', vaplayer)
Vue.component('tableModel', tableModel)

Vue.use(Logger)

Vue.config.productionTip = false

Vue.prototype.$apis = apis

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
