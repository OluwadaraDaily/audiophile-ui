import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from './views/HomeView/HomeView.vue'
import HeadphonesView from './views/HeadphonesView/HeadphonesView.vue'
import SpeakersView from "./views/SpeakersView/SpeakersView.vue"
import EarphonesView from "./views/EarphonesView/EarphonesView.vue"
import CategoriesView from "./views/CategoriesView/CategoriesView.vue"
import ProductDetailView from './views/ProductDetailView/ProductDetailView.vue'


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
        component: HeadphonesView,
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
  {
    path: "/categories/:category/:id",
    name: "product-detail",
    component: ProductDetailView,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page
    return { top: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.name === 'product-detail' && !['headphones', 'speakers', 'earphones'].includes(to.params.category as string)) {
    next({ name: 'home' }); // Redirect to home for invalid categories
  } else {
    next();
  }
});