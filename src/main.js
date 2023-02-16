import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import VueScrollTo from 'vue-scrollto'

AOS.init()

createApp(App)
.use(router)
.use(VueScrollTo)
.mount('#app')
