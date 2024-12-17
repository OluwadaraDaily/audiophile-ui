import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from './views/HomeView/HomeView.vue'
import HeadphonesView from './views/HeadphonesView/HeadphonesView.vue'
import SpeakersView from "./views/SpeakersView/SpeakersView.vue"
import EarphonesView from "./views/EarphonesView/EarphonesView.vue"
import CategoriesView from "./views/CategoriesView/CategoriesView.vue"


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: "/categories",
    component: CategoriesView,
    redirect: "/categories/headphones",
    children: [
      {
        path: 'headphones',
        name: "headphones",
        component: HeadphonesView
      },
      {
        path: 'speakers',
        name: "speakers",
        component: SpeakersView
      },
      {
        path: 'earphones',
        name: "earphones",
        component: EarphonesView
      },
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page
    return { top: 0 };
  },
})