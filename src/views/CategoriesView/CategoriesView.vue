<template>
  <main>
    <categories-header-section
      :title="currentPageTitle"
    />
    <section class="my-10">
      <div class="w-[90%] lg:w-[75%] mx-auto">
        <router-view/>
        <categories-menu/>
        <highlight-banner/>
      </div>
    </section>
  </main>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import CategoriesMenu from '@/components/molecules/CategoriesMenu/CategoriesMenu.vue';
import HighlightBanner from '@/components/molecules/HighlightBanner/HighlightBanner.vue';
import CategoriesHeaderSection from '@/components/atoms/CategoriesHeaderSection/CategoriesHeaderSection.vue';

const route = useRoute();

// Dynamically determine the header title based on the current route
const currentPageTitle = computed(() => {
  return route.name;
});
</script>