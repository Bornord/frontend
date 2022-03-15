import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutViewVue from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ItemDetail from '../views/ItemDetail.vue'

Vue.use(VueRouter)

/*
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/AboutView.vue')
    }
  }
]
*/
    

const router = new VueRouter({
  routes: [
      {path: '/item/:name', component: ItemDetail },
      {path: '/', name: 'home', component: HomeView},
      {path: '/about', name: 'about', component: AboutViewVue},
  ]

})

export default router
