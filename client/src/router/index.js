import Vue from 'vue'
import VueRouter from 'vue-router'
import Sports from '../views/Sports.vue'
import Courts from '../views/Courts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/courts',
    name: 'Courts',
    props: true,
    component: Courts
  }
]

const router = new VueRouter({
  routes
})

export default router
