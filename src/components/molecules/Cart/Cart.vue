<template>
  <div class="bg-black bg-opacity-40 relative h-full flex justify-center md:justify-end">
    <div class="w-[90%] md:w-[50%] lg:w-[400px] mx-auto bg-white rounded-md absolute top-12 md:right-10 lg:right-[10%] py-8 text-black">
      <div class="w-[90%] mx-auto">
        <div class="flex items-center justify-between">
          <h6 class="h6 uppercase">cart ({{ cartStore.getCartCount }})</h6>
          <button 
            class="p underline decoration-[#00000080] text-black opacity-50"
            @click="() => {}"
            v-if="cartStore.getCartCount"
          >
            Remove all
          </button>
        </div>
        <div class="my-12 max-h-[150px] md:max-h-[200px] overflow-y-auto">
          <cart-item
            v-for="cartItem in cart"
            :key="cartItem.product.name"
            v-bind="cartItem"
            class="mb-6"
          />
        </div>
        <div 
          class="flex justify-between items-center mb-8"
          v-if="cartStore.getCartCount"
        >
          <p class="uppercase">total</p>
          <h6 class="font-bold">{{ formatCurrency(cartStore.getCartTotalAmount) }}</h6>
        </div>
        <router-link 
          to="#"
          class="primary-btn w-full block"
          v-if="cartStore.getCartCount"
        >
          checkout
        </router-link>
      </div>
    </div>
  </div>  
</template>

<script setup lang="ts">
import { watch } from "vue"
import CartItem from "@/components/atoms/CartItem/CartItem.vue"
import { Cart } from "@/types/cart.ts"
import { headphonesData } from "@/data/products.ts"
import { formatCurrency } from "@/common/utils.ts";
import { useCartStore } from "@/store/store";

// Cart [store]
const cartStore = useCartStore();

let cart = computed(() => cartStore.cart)
</script>