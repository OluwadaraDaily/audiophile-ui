<template>
  <div class="bg-black bg-opacity-40 relative h-full flex justify-center">
    <div class="w-[90%] mx-auto bg-white rounded-md absolute top-12 py-8 text-black">
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
        <div class="my-12">
          <cart-item
            v-for="cartItem in cart"
            :key="cartItem.product.name"
            v-bind="cartItem"
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
import { computed, reactive } from "vue"
import CartItem from "@/components/atoms/CartItem/CartItem.vue"
import { Cart } from "@/types/cart.ts"
import { headphonesData } from "@/data/products.ts"
import { formatCurrency } from "@/common/utils.ts";
import { useCartStore } from "@/store/store.ts";

// Cart [store]
const cartStore = useCartStore();
const cart = [];
console.log('CART STORE =>', cartStore.cart)
</script>