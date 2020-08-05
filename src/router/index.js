import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Bar from '@/views/Bar.vue'
import Cartridge from '@/views/Cartridge.vue'
import Accessories from '@/views/Accessories.vue'
import Food from '@/views/Food.vue'
import Cocktails from '@/views/Cocktails.vue'
import Receive from '@/views/Receive.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Bar',
        name: 'Bar',
        component: Bar,
    },
    {
        path: '/Cartouches',
        name: 'Cartridge',
        component: Cartridge,
    },
    {
        path: '/Accessoires',
        name: 'Accessories',
        component: Accessories,
    },
    {
        path: '/Cocktails',
        name: 'Cocktails',
        component: Cocktails,
    },
    {
        path: '/Food',
        name: 'Food',
        component: Food,
    },
    {
        path: '/Recevoir',
        name: 'Receive',
        component: Receive,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
