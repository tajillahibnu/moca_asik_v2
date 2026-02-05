import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/userguide',
            name: 'userguide',
            component: () => import('../views/UserGuideView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/features/authentication/views/LoginView.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/features/dashboard/views/DashboardView.vue'),
        },
    ]
})

export default router
