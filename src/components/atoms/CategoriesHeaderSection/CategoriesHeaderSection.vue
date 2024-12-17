<template>
  <section class="bg-black text-white">
    <div class="py-[50px] lg:py-[100px] flex justify-center items-center">
      <h2 class="h2 uppercase">{{props.title}}</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
 title: string
}>()
</script>