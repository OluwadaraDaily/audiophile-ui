<template>
  <div class="flex items-center gap-4 justify-between">
    <div class="w-[64px] h-[64px] rounded-md bg-grey flex items-center justify-center">
      <img :src="imageSrc" class="h-[40px]" :alt="`${props.name} image`"/>
    </div>
    <div class="">
      <p class="uppercase font-bold">{{ props.product.altName }}</p>
      <p class="text-sm opacity-50 font-bold">{{ formatCurrency(props.product.price) }}</p>
    </div>
    <slot name="cart-item-right-section">
      <div class="bg-grey max-w-[100px] md:mr-0 flex-grow flex items-center py-2">
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
      <button type="button" class="rounded-[50%] border border-danger p-1 hover:bg-danger hover:text-white group" @click="removeItemFromCart">
        <close-icon/>
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { CartItem } from "@/types/cart.ts";
import { useImageLoader } from "@/composables/useImageLoader.ts"
import { formatCurrency, debounce } from "@/common/utils.ts"
import { useCartStore } from "@/store/cart"
import CloseIcon from "@/components/icons/Close.vue"

const props = defineProps<CartItem>();
const cartStore = useCartStore();

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


// Watch props.quantity, if change, update quantity
watch(() => props.quantity, (newQuantity) => {
  quantity.value = newQuantity;
})

const decreaseQuantity = (): void => {
  if (quantity.value > 1) {
    quantity.value--;
  } else if (quantity.value === 1) {
    removeItemFromCart()
  }
}

const increaseQuantity = (): void => {
  quantity.value++;
}

watch(quantity, () => {
  debouncedUpdateCart()
})

const debouncedUpdateCart = debounce(() => {
  cartStore.addToCart(props.product, quantity.value);
})

const removeItemFromCart = () => {
  const shouldRemoveItem = confirm(`Are you sure you want to remove ${props.product.altName} from cart`)
  if (shouldRemoveItem) {
    cartStore.removeFromCart(props.product)
  }
}

</script>