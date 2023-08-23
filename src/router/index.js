import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const routerHistory = createWebHistory()

// 定义路由
const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@pages/home/index.vue')
      },
      {
        path: '/software',
        name: 'Software',
        component: () => import('@pages/software/index.vue')
      },
      {
        path: '/translate',
        name: 'Translate',
        component: () => import('@pages/translate/index.vue')
      },
      {
        path: '/convert',
        name: 'Convert',
        component: () => import('@pages/convert/index.vue')
      }
    ]
  }
]

// 创建路由器
const router = createRouter({
  scrollBehavior: () => ({ y: 0 }),
  history: routerHistory,
  routes
})

export default router
