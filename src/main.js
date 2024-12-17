import './assets/main.css'
import './index.css'
import {router} from './router.ts'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount("#app")