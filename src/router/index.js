import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {layout: 'Login'}
  },
  {
    path: '/',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/createUser',
    name: 'createuser',
    component: () => import('../views/CreateUser.vue')
  },
  {
    path: '/Workplace',
    name: 'Workplace',
    component: () => import('../views/Workplace.vue')
  },
  {
    path: '/storage',
    name: 'storage',
    component: () => import('../views/Storage.vue')
  },
  {
    path: '/additem',
    name: 'addItem',
    component: () => import('../views/AddItem.vue')
  },
  {
    path: '/deal',
    name: 'deal',
    component: () => import('../views/Deal.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
