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
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
