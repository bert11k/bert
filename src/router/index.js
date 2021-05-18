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
    path: '/workplace',
    name: 'WorkplaceDiler',
    meta: {show: 'workplace'},
    component: () => import('../views/Workplace.vue')
  },
  {
    path: '/storage',
    name: 'storage',
    meta: {show: 'storage'},
    component: () => import('../views/Storage.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('../views/Reports.vue')
  },
  {
    path: '/planing',
    name: 'planing',
    component: () => import('../views/Planing.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/reportperiod/:worker/:key',
    name: 'reportperiod',
    component: () => import('../views/ReportPeriod.vue')
  },
  {
    path: '/reportdeal/:key',
    name: 'reportdeal',
    component: () => import('../views/ReportDeal.vue')
  },
  {
    path: '/additem',
    name: 'addItem',
    meta: {show: 'storage'},
    component: () => import('../views/AddItem.vue')
  },
  {
    path: '/deal/:key',
    name: 'deal',
    meta: {show: 'workplace'},
    component: () => import('../views/Deal.vue')
  },
  {
    path: '/workplaceManager',
    name: 'Workplace',
    meta: {show: 'workplace'},
    component: () => import('../views/WorkplaceManager.vue')
  },
  {
    path: '/addTransaction',
    name: 'AddTransaction',
    meta: {show: 'workplace'},
    component: () => import('../views/AddTransaction.vue')
  },
  {
    path: '/addTask',
    name: 'AddTask',
    meta: {show: 'workplace'},
    component: () => import('../views/AddTask.vue')
  },
  {
    path: '/customers',
    name: 'customers',
    component: () => import('../views/Customers.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
