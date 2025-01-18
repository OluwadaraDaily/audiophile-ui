<template>
  <header class="w-full bg-[#0E0E0E] text-white">
    <div 
      class="sticky top-0 lg:w-[85%] w-[90%] mx-auto lg:max-w-[1110px] backdrop-blur-[16px] py-8 flex items-center justify-between border-b lg:border-[#979797] border-[#9797971A]"
    >
      <div class="lg:hidden inline" @click="toggleMenu">
        <hamburger-icon/>
      </div>
      <div class="lg:basis-auto basis-[80%] flex justify-center md:justify-start">
        <router-link to="/">
          <logo/>
        </router-link>
      </div>
      <div class="hidden lg:block">
        <ul class="flex items-center gap-4">
          <li>
            <router-link class="sub-title hover:text-primary" to="/">HOME</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/categories/headphones">HEADPHONES</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/categories/speakers">SPEAKERS</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/categories/earphones">EARPHONES</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="flex items-center gap-1" @click="toggleCart($event)">
        <cart-icon/>
        <span class="h-[20px] w-[20px] rounded-[50%] bg-primary-light text-black font-bold flex items-center justify-center">
          {{ cartStore.cart.length }}
        </span>
      </button>
    </div>
    <!-- Menu for small and medium sized screens -->
    <div 
      class="relative"
      v-show="showMenu"
    >
      <div 
        class="absolute w-full bg-white rounded-bl-xl rounded-br-xl roll-down z-10 top-0 shadow-2xl"
        :class="{ 'roll-down-active': showMenu }"
      >
        <categories-menu/>
      </div>
    </div>

    <div
      v-if="showCart"
      class="w-full h-[100vh] fixed z-50"
    >
      <cart @close-cart="showCart = false"/>
    </div>
  </header>
</template>


<script setup>
// Imports
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/components/icons/Logo.vue";
import CartIcon from "@/components/icons/Cart.vue";
import HamburgerIcon from "@/components/icons/Hamburger.vue";
import CategoriesMenu from "@/components/molecules/CategoriesMenu/CategoriesMenu.vue"
import Cart from "@/components/molecules/Cart/Cart.vue";
import { useCartStore } from "@/store/cart.ts";

// Router instance
const router = useRouter();

const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const showCart = ref(false);
const toggleCart = (event) => {
  event.stopPropagation();
  showCart.value = !showCart.value;
}

watch(showCart, () => {
  if (showCart.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
})

// Watch route changes to close the menu
router.afterEach(() => {
  showMenu.value = false;
});

// Init cart store
const cartStore = useCartStore();
</script>


<style scoped>
.roll-down {
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.roll-down-active {
  opacity: 1;
  transform: translateY(0);
}
</style>