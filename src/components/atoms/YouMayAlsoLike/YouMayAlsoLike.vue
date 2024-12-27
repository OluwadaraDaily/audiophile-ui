<template>
  <div>
    <h6 class="h6 uppercase text-center mb-8">you may also like</h6>

    <div
      class="flex flex-col gap-6 md:flex-row flex-wrap md:justify-center lg:gap-10"
    >
      <product-item
        v-for="productItem in productsYouMayLike"
        :key="productItem.label"
        :product="productItem"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { watch } from 'vue';
import { ProductProps } from '../ProductItem/types';
import { earphonesData, headphonesData, speakersData } from "@/data/products";
import ProductItem from "./ProductItem.vue";


const props = defineProps<{
  product: ProductProps
}>()

const allProducts: ProductProps[] = [
  ...headphonesData,
  ...earphonesData,
  ...speakersData
]

let productsYouMayLike: ProductProps[] = []

watch(() => props.product,
  () => {
    productsYouMayLike = allProducts.filter((prod) => props.product.tag !== prod.tag).slice(0, 3)
  },
  { immediate: true }
)
</script>