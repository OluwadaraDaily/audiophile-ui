<template>
  <div class="bg-black bg-opacity-40 relative h-full flex justify-center">
    <div class="w-[90%] mx-auto bg-white rounded-md absolute top-12 py-8 text-black">
      <div class="w-[90%] mx-auto">
        <div class="flex items-center justify-between">
          <h6 class="h6 uppercase">cart (3)</h6>
          <button 
            class="p underline decoration-[#00000080] text-black opacity-50"
            @click="() => {}"
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
      </div>
    </div>
  </div>  
</template>

<script setup lang="ts">
import CartItem from "@/components/atoms/CartItem/CartItem.vue"
import { Cart } from "@/types/cart.ts"
import {headphonesData} from "@/data/products.ts"

// Create a placeholder cart
const cart: Cart = [
  {
    product: headphonesData[0],
    quantity: 2
  }
]
</script>