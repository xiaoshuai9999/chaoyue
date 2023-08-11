import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

import Home from '/src/pages/home/index.vue'

// 定义路由
const routes = [
    {
        path: '/',
        redirect: { name: 'Home' },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            }
        ]
    }
]

// 创建路由器
const router = createRouter({
    scrollBehavior: () => ({ y: 0 }),
    history: routerHistory,
    routes: routes
})


export default router;
