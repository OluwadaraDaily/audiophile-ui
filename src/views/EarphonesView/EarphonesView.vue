<template>
  <div v-for="earphone in earphonesData" class="mb-20" :key="earphone.tag">
    <product-item
      v-bind="earphone"
    />
  </div>
</template>


<script setup>
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import { earphonesData } from '@/data/products';
</script>