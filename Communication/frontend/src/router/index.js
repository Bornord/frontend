import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommunicationVue from '../views/CommunicationView.vue'
import AjoutPersonneVue from '../views/AjoutPersonneVue.vue'
import AffichageVue from '../views/AffichageVue.vue'
//import AjoutAdresseVue from '../views/AjoutAdresse.vue'

Vue.use(VueRouter)

const routes = [
  
  /*
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  */
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ajoutPersonne',
    name: 'ajoutPersonne',
    component: AjoutPersonneVue,
  },
  {
    path: '/affichage',
    name: 'affichage',
    component: AffichageVue,
  },
  {
    path: '/comm',
    name: 'Requête',
    component: CommunicationVue
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
