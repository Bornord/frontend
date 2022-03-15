import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

routes: [
  // les parties dynamiques commencent par un deux-points
  { path: '/item/:name', component: ItemDetail }
]

const router = new VueRouter({
  routes: [
    // les parties dynamiques commencent par un deux-points
    { path: '/item/:name', component: ItemDetail }
  ]
})

export default router
