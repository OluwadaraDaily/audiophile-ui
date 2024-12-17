<template>
  <div 
    class="flex flex-col lg:flex-row lg:items-center lg:gap-12"
    :class="{ 'lg:flex-row-reverse' : props.isRowReverse  }"
  >
    <div class="bg-grey rounded-md py-12 mb-4 flex items-center justify-center lg:basis-[50%]">
      <img :src="imageSrc" class="w-[220px] h-[243px] lg:h-[386px] lg:w-[350px]" :alt="`${props.name} image`">
    </div>
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:basis-[50%]">
      <p v-show="props.isNewProduct" class="overline-text text-primary mb-4">NEW PRODUCT</p>
      <h4 class="h4 uppercase mb-4">{{ props.name }}</h4>
      <p class="p opacity-50 mb-4">{{ props.description }}</p>
      <router-link to="/headphones" class="primary-btn w-max">see product</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { ProductProps } from './types';

const props = defineProps<ProductProps>()

const images = import.meta.glob('@/assets/img/**/*'); // Match all images
const imageSrc = ref<string>('');

watchEffect(async () => {
  const fullPath = `/src/assets/img/${props.imgSrc}`;
  if (images[fullPath]) {
    const mod = await images[fullPath]();
    imageSrc.value = mod.default;
  } else {
    console.error('Image not found:', fullPath);
  }
});
</script>