export const routes = [
  {
    path: '/',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ './demo.vue')
  },
]
