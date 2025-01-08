<template>
  <div 
    class="flex flex-col lg:flex-row lg:items-center lg:gap-12"
    :class="{ 'lg:flex-row-reverse' : props.isRowReverse  }"
  >
    <div class="bg-grey rounded-md py-12 mb-4 flex items-center justify-center lg:basis-[50%]">
      <img :src="imageSrc" class="h-[243px] lg:h-[386px]" :alt="`${props.name} image`">
    </div>
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:basis-[50%]">
      <p v-show="props.isNewProduct" class="overline-text text-primary mb-4">NEW PRODUCT</p>
      <h4 class="h4 uppercase mb-4">{{ props.name }}</h4>
      <p class="p opacity-50 mb-4">{{ props.description }}</p>
      <slot name="after-description">
        <router-link :to="`${props.link}`" class="primary-btn w-max">see product</router-link>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, watch } from 'vue';
import { ProductProps } from './types';
import { useImageLoader } from '@/composables/useImageLoader';

const props = defineProps<ProductProps>()

const imageSrc = ref<string>('');

watch(() => props.imgSrc, (newImgSrc) => {
  const { imageSrc: loadedImageSrc } = useImageLoader(newImgSrc);
  watch(
      () => loadedImageSrc.value,
      (loadedSrc) => {
        imageSrc.value = loadedSrc;
      }
    );

}, { immediate: true })
</script>