import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/partner',
        component: () => import('../components/Partner.vue')
    },
    {
        path: '/assist',
        component: () => import('../components/Assist.vue')
    },
    {
        path: '/pet',
        component: () => import('../components/Pet.vue')
    },
    {
        path: '/wel',
        component: () => import('../components/TheWelcome.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router