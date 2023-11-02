import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../components/Register.vue')
    },
    {
        path: '/home',
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
        path: '/assist/do',
        component: () => import('../components/Do.vue')
    },
    {
        path: '/pet',
        component: () => import('../components/Pet.vue')
    },
    {
        path: '/settings',
        component: () => import('../components/Settings.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router