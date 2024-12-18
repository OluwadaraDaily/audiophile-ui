<template>
  <div v-for="speaker in speakersData" class="mb-20" :key="speaker.tag">
    <product-item
      v-bind="speaker"
    />
  </div>
</template>


<script setup>
import ProductItem from '@/components/atoms/ProductItem/ProductItem.vue';
import { speakersData } from '@/data/products';
</script>