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
            <router-link class="sub-title hover:text-primary" to="/headphones">HEADPHONES</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/speakers">SPEAKERS</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/earphones">EARPHONES</router-link>
          </li>
        </ul>
      </div>
      <div>
        <cart-icon/>
      </div>
    </div>
    <!-- Menu for small and medium sized screens -->
    <div 
      class="relative block"
    >
      <div 
        class="lg:hidden absolute w-full bg-white rounded-bl-xl rounded-br-xl roll-down z-10 top-0 shadow-2xl"
        :class="{ 'block': showMenu }"
      >
        <categories-menu/>
      </div>
    </div>
  </header>
</template>


<script setup>
// Imports
import { ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/components/icons/Logo.vue";
import CartIcon from "@/components/icons/Cart.vue";
import HamburgerIcon from "@/components/icons/Hamburger.vue";
import CategoriesMenu from "@/components/molecules/CategoriesMenu/CategoriesMenu.vue"

// Router instance
const router = useRouter();

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// Watch route changes to close the menu
router.afterEach(() => {
  showMenu.value = false;
});
</script>


<style scoped>
.roll-down {
  opacity: 0;
  overflow: hidden;
  transition: min-height 0.5s ease, opacity 0.5s ease;
}

.roll-down.block {
  opacity: 1;
}
</style>