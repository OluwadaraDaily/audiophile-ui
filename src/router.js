import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView/HomeView.vue'
import HeadphonesView from './views/HeadphonesView/HeadphonesView.vue'
import SpeakersView from "./views/SpeakersView/SpeakersView.vue"
import EarphonesView from "./views/EarphonesView/EarphonesView.vue"


const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: '/headphones',
    name: "headphones",
    component: HeadphonesView
  },
  {
    path: '/speakers',
    name: "speakers",
    component: SpeakersView
  },
  {
    path: '/earphones',
    name: "earphones",
    component: EarphonesView
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})