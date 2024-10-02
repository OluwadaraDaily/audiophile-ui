<template>
  <div class="w-full">
    <div 
      class="sticky top-0 lg:w-[85%] lg:mx-auto lg:max-w-[1110px] backdrop-blur-[16px] py-8 flex items-center justify-between border-b border-[#979797]"
    >
      <div>
        <logo/>
      </div>
      <div>
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
  </div>
</template>


<script setup>
// Imports
import Logo from "../icons/Logo.vue";
import CartIcon from "../icons/Cart.vue";


</script>