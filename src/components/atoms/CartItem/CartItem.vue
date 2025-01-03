<template>
  <div class="flex items-center gap-4">
    <div class="w-[64px] h-[64px] rounded-md bg-grey flex items-center justify-center">
      <img :src="imageSrc" class="h-[40px]" :alt="`${props.name} image`"/>
    </div>
    <div class="">
      <p class="uppercase font-bold">{{ props.product.altName }}</p>
      <p class="text-sm opacity-50 font-bold">{{ formatCurrency(props.product.price) }}</p>
    </div>
    <div class="bg-grey flex-grow flex items-center py-2">
      <div class="w-[70%] mx-auto flex justify-between">
        <button 
          class="hover:text-primary text-black opacity-25 font-bold hover:opacity-100 hover:cursor-pointer"
          :class="{ 'hover:cursor-not-allowed hover:text-black hover:opacity-25' : quantity === 1 }"
          @click="decreaseQuantity"
        >
          -
        </button>
        <p class="p text-black font-bold">{{ quantity }}</p>
        <button 
          class="hover:text-primary text-black opacity-25 font-bold hover:opacity-100 hover:cursor-pointer"
          @click="increaseQuantity"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { CartItem } from "@/types/cart.ts";
import { useImageLoader } from "@/composables/useImageLoader.ts"
import { formatCurrency, debounce } from "@/common/utils.ts"

const props = defineProps<CartItem>();

const imageSrc = ref<string>('');
watch(() => props.product.imgSrc, (newImgSrc) => {
  const { imageSrc: loadedImageSrc } = useImageLoader(newImgSrc);
  watch(
      () => loadedImageSrc.value,
      (loadedSrc) => {
        imageSrc.value = loadedSrc;
      }
    );

}, { immediate: true })

// Handle Quantity of CartItem
let quantity = ref<number>(props.quantity)

const decreaseQuantity = (): void => {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

const increaseQuantity = (): void => {
  quantity.value++;
}

watch(() => quantity.value, () => {
  debouncedUpdateCart()
})

// Update cart TODO: move to a separate file (all cart funtions)
const debouncedUpdateCart = debounce(() => {
  console.log('Updating cart with product:', props.product, 'and quantity:', quantity.value);
  updateCart(props.product, quantity.value);
})
const updateCart = (product: ProductProps, quantity: number) => {
  console.log('PRODUCT =>', product);
  console.log('QUANTITY =>', quantity);
}

</script>