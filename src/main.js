import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import MainView from './views/MainView.vue'
import { createPinia } from 'pinia'
const routes=[
    {path:'/',component: Login},
    {path:'/main',component:MainView},
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(createPinia())
app.use(router);
app.mount('#app');
//createApp(App).mount('#app')
