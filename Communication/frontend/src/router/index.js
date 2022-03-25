import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommunicationVue from '../views/CommunicationView.vue'
import AjoutPersonneVue from '../views/AjoutPersonneVue.vue'
import AffichageVue from '../views/AffichageVue.vue'
import AjoutAdresseVue from '../views/AjoutAdresseVue.vue'
import AssocierVue from '../views/AssocierVue.vue'
import TestSQLVue from '../views/TestSQLVue.vue'
import LoginVue from '../views/LoginVue.vue'
import SignupVue from '../views/SignupVue.vue'


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
    path: '/testSQL',
    name: 'testSQL',
    component: TestSQLVue,
  },
  {
    path: '/ajoutPersonne',
    name: 'ajoutPersonne',
    component: AjoutPersonneVue,
  },
  {
    path: '/ajoutAdresse',
    name: 'ajoutAdresse',
    component: AjoutAdresseVue,
  },
  {
    path: '/affichage',
    name: 'affichage',
    component: AffichageVue,
  },
  {
    path: '/associer',
    name: 'associer',
    component: AssocierVue,
  },
  {
    path: '/comm',
    name: 'Requête',
    component: CommunicationVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/signup',
    name: 'singup',
    component: SignupVue
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
