<template>
  <div>
    <div class="bg-grey rounded-md p-4 mb-8 flex items-center justify-center">
      <img 
        :src="imageSrc" 
        class="h-[86px] md:h-[193px]"
        :alt="`${props.product.name} image`"
      />
    </div>
    <div class="flex flex-col items-center">
      <h6 class="h6 mb-4">{{ props.product.altName }}</h6>
      <router-link
        :to="`${props.product.link}`"
        class="primary-btn block w-max"
      >
        see product
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { ProductProps } from '../ProductItem/types';
import {useImageLoader} from "@/composables/useImageLoader.ts"

const props = defineProps<{
  product: ProductProps
}>()

const imageSrc = ref<string>('');

const { imageSrc: loadedImageSrc } = useImageLoader(props.product.imgSrc)

watchEffect(() => {
  imageSrc.value = loadedImageSrc.value
})
</script>