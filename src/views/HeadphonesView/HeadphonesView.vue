<template>
  <div v-for="headphone in headphonesData" class="mb-20" :key="headphone.tag">
    <product-item
      v-bind="headphone"
    />
  </div>
</template>


<script setup>
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import { headphonesData } from '@/data/products';
</script>