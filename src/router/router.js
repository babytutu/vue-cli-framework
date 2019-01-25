import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '@/views/demo.vue')
    },
    {
      path: '/niuniu',
      name: 'niuniu',
      component: () => import(/* webpackChunkName: "niuniu" */ '@/views/niuniu.vue')
    },
  ]
})
