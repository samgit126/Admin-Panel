import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from './welcome.vue';
const routes = [
    {
        path:'/',
        name:'Welcome',
        component:Welcome
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,  
})
export default router