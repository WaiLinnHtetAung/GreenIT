import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/services-solutions',
        name: 'Serivces&Solutions',
        component: () =>
            import ('@/views/Services.vue')
    },
    {
        path: '/services-solutions/:slug',
        name: 'Serivce Detail',
        component: () =>
            import ('@/views/ServiceDetail.vue'),
        props: true
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: () =>
            import ('@/views/Promotion.vue')
    },
    {
        path: '/about-us',
        name: 'AboutUS',
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/loading',
        component: () =>
            import ('@/components/Loading.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router