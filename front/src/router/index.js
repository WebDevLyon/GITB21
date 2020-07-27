import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')

  },
  {
    path: '/player',
    name: 'Player',
    component: () => import(/* webpackChunkName: "about" */ '../views/Player.vue')
  },
  {
    path: '/tournoi',
    name: 'Tournoi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tournoi.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
