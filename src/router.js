import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView/HomeView.vue'
import HeadphonesView from './views/HeadphonesView/HeadphonesView.vue'
import SpeakersView from "./views/SpeakersView/SpeakersView.vue"
import EarphonesView from "./views/EarphonesView/EarphonesView.vue"


const routes = [
  { path: '/', component: HomeView },
  { path: '/headphones', component: HeadphonesView },
  { path: '/speakers', component: SpeakersView },
  { path: '/earphones', component: EarphonesView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})