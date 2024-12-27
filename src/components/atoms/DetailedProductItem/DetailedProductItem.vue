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
        >
          add to cart
        </button>
      </div>
    </template>
  </product-item>
</template>

<script setup lang="ts">
// Imports
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import { ProductProps } from '../ProductItem/types';
import { formatCurrency } from '@/common/utils';
import { ref } from 'vue';

// Props
const props = defineProps<{
  product: ProductProps
}>()

// Count for cart
const count = ref<number>(1);

const increaseCount = () => {
  count.value++;
}

const decreaseCount = () => {
  if (count.value > 1) {
    count.value--;
  }
}
</script>