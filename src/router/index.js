import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/People.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/People.vue')
  },
  {
    path: '/',
    name: 'Locals'
  },
  {
    path: '',
    name: 'Travel'
  },
  {
    path: '',
    name: 'Stories'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
