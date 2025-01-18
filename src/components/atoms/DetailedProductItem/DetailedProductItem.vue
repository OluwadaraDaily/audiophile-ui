<template>
  <product-item v-bind="props.product">
    <template #after-description>
      <p class="h6 mb-6">
        {{ formatCurrency(props.product.price) }}
      </p>
      <div class="flex gap-4">
        <div class="bg-grey w-[120px] flex items-center">
          <div class="w-[70%] mx-auto flex justify-between">
            <button 
              class="hover:text-primary text-black opacity-25 font-bold hover:opacity-100 hover:cursor-pointer"
              :class="{ 'hover:cursor-not-allowed hover:text-black hover:opacity-25' : count === 1 }"
              @click="decreaseCount"
            >
              -
            </button>
            <p class="p text-black font-bold">{{ count }}</p>
            <button 
              class="hover:text-primary text-black opacity-25 font-bold hover:opacity-100 hover:cursor-pointer"
              @click="increaseCount"
            >
              +
            </button>
          </div>
        </div>
        <button 
          class="primaty-btn bg-primary text-white font-semibold py-4 uppercase w-[160px]"
          @click="addToCart"
        >
          {{ isProductInCart ? 'update cart' : 'add to cart' }}
        </button>
      </div>
    </template>
  </product-item>
</template>

<script setup lang="ts">
// Imports
import { ref, onMounted, watch } from 'vue';
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import { ProductProps } from '../ProductItem/types';
import { formatCurrency } from '@/common/utils';
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/types/cart.ts"

// Props
const props = defineProps<{
  product: ProductProps
}>()

// Cart logic
let isProductInCart = ref(false)
const cartStore = useCartStore()

let count = ref<number>(1);

watch(cartStore.cart, () => {
  // Check if product is in cart
  // If yes, update count and button text
  const findProductInCart = cartStore.cart.find((item: CartItem) => item.product.tag === props.product.tag)
  if (findProductInCart) {
    isProductInCart.value = true;
    count.value = findProductInCart.quantity;
  } else {
    isProductInCart.value = false;
    count.value = 1;
  }
}, { immediate: true })

const increaseCount = () => {
  count.value++;
}

const decreaseCount = () => {
  if (count.value > 1) {
    count.value--;
  }
}

const addToCart = () => {
  cartStore.addToCart(props.product, count.value);
  if (!isProductInCart) {
    alert(`Added ${props.product.name} to cart`) 
  } else {
    alert(`Updated ${props.product.name} quantity in cart`)
  }
}
</script>