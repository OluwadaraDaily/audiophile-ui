import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: "home",
    component: () => import('@/views/HomeView/HomeView.vue')
  },
  {
    path: "/categories",
    component: () => import('@/views/CategoriesView/CategoriesView.vue'),
    redirect: "/categories/headphones",
    children: [
      {
        path: 'headphones',
        name: "headphones",
        component: () => import('@/views/HeadphonesView/HeadphonesView.vue'),
      },
      {
        path: 'speakers',
        name: "speakers",
        component: () => import('@/views/SpeakersView/SpeakersView.vue')
      },
      {
        path: 'earphones',
        name: "earphones",
        component: () => import('@/views/EarphonesView/EarphonesView.vue')
      },
    ]
  },
  {
    path: "/categories/:category/:id",
    name: "product-detail",
    component: () => import('@/views/ProductDetailView/ProductDetailView.vue'),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import('@/views/CheckoutView/CheckoutView.vue')
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