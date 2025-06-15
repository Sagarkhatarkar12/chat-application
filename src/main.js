import './assets/main.css'
import  Router from './Routers/index.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia(App)
const app = createApp(App)
app.use(pinia)
app.use(Router)
app.mount('#app')
