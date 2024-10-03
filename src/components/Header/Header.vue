<template>
  <div class="w-full">
    <div 
      class="sticky top-0 lg:w-[85%] md:w-[90%] w-[90%] mx-auto lg:max-w-[1110px] backdrop-blur-[16px] py-8 flex items-center justify-between border-b border-[#979797]"
    >
      <div class="lg:hidden inline" @click="toggleMenu">
        <hamburger-icon/>
      </div>
      <div class="lg:basis-auto basis-[80%] flex justify-center md:justify-start">
        <logo/>
      </div>
      <div class="hidden lg:block">
        <ul class="flex items-center gap-4">
          <li>
            <router-link class="sub-title" to="/">HOME</router-link>
          </li>
          <li>
            <router-link class="sub-title" to="/headphones">HEADPHONES</router-link>
          </li>
          <li>
            <router-link class="sub-title" to="/speakers">SPEAKERS</router-link>
          </li>
          <li>
            <router-link class="sub-title" to="/earphones">EARPHONES</router-link>
          </li>
        </ul>
      </div>
      <div>
        <cart-icon/>
      </div>
    </div>
    <div class="relative block">
      <div 
        class="lg:hidden absolute w-full bg-white rounded-bl-xl rounded-br-xl roll-down z-10 top-0"
        :class="{ 'block': showMenu }" 
      >
        <div class="flex md:flex-row flex-col items-center justify-center md:gap-2 gap-10 px-6 py-12 md:mt-12">
          <div 
            class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col items-center justify-end py-4"
          >
            <div class="absolute top-[-30px]">
              <img src="../../assets/img/headphones.png" class="w-[80px] h-[104px]" alt="Headphones">
            </div>
            <div class="flex flex-col items-center">
              <p class="mb-2 font-bold text-black">HEADPHONES</p>
              <button class="tertiary-btn sub-title text-black opacity-50">
                SHOP <right-arrow-icon/>
              </button>
            </div>
          </div>
          <div 
            class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col items-center justify-end py-4"
          >
            <div class="absolute top-[-30px]">
              <img src="../../assets/img/headphones.png" class="w-[80px] h-[104px]" alt="Headphones">
            </div>
            <div class="flex flex-col items-center">
              <p class="mb-2 font-bold text-black">HEADPHONES</p>
              <button class="tertiary-btn sub-title text-black opacity-50">
                SHOP <right-arrow-icon/>
              </button>
            </div>
          </div>
          <div 
            class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col items-center justify-end py-4"
          >
            <div class="absolute top-[-30px]">
              <img src="../../assets/img/headphones.png" class="w-[80px] h-[104px]" alt="Headphones">
            </div>
            <div class="flex flex-col items-center">
              <p class="mb-2 font-bold text-black">HEADPHONES</p>
              <button class="tertiary-btn sub-title text-black opacity-50">
                SHOP <right-arrow-icon/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// Imports
import { ref } from "vue";
import Logo from "../icons/Logo.vue";
import CartIcon from "../icons/Cart.vue";
import HamburgerIcon from "../icons/Hamburger.vue";
import RightArrowIcon from "../icons/RightArrow.vue";

const showMenu = ref(false);

const toggleMenu = () => {
  console.log('SHOW MENU =>', showMenu)
  showMenu.value = !showMenu.value;
};
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