import Vue from 'vue'
import Router from 'vue-router'
import { routes as demoRoute } from '@/views/demo/routes'
Vue.use(Router)

export default new Router({
  routes: [
    ...demoRoute,
  ]
})
