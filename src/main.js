import './assets/main.css'
import './index.css'
import { router } from './router.ts'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { initializeCart } from './common/cartUtil'

initializeCart();

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")