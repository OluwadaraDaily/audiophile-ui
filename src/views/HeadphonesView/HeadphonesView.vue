<template>
  <main>
    <section class="bg-black text-white">
      <div class="py-[50px] flex justify-center items-center">
        <h2 class="h2 uppercase">headphones</h2>
      </div>
    </section>
    <section class="my-10">
      <div class="w-[90%] lg:w-[75%] mx-auto">
        <div v-for="headphone in headphonesData" class="mb-20" :key="headphone.tag">
          <product-item
            v-bind="headphone"
          />
        </div>
        <categories-menu/>
        <highlight-banner/>
      </div>
    </section>
  </main>
</template>


<script setup>
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import CategoriesMenu from '@/components/molecules/CategoriesMenu/CategoriesMenu.vue';
import HighlightBanner from '@/components/molecules/HighlightBanner/HighlightBanner.vue';
import { headphonesData } from '@/data/products';
</script>