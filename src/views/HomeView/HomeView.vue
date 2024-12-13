<template>
  <!-- Main section -->
  <section class="bg-[#0E0E0E] text-white mb-8 lg:mb-12">
    <div class="lg:w-[85%] w-[90%] mx-auto lg:flex lg:items-center sm:flex sm:justify-center lg:justify-between md:relative h-[60vh] lg:h-auto">
      <div 
        class="absolute lg:static top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:transform-none z-[3] lg:text-left text-center"
      >
        <p class="overline-text text-white mb-4 opacity-75">NEW PRODUCT</p>
        <h1 class="h1 uppercase lg:w-[400px] mb-4">
          XX99 Mark II Headphones
        </h1>
        <p class="lg:w-[350px] mb-6 opacity-75 md:mb-12">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <router-link to="/headphones" class="primary-btn">see product</router-link>
      </div>
      <div class="lg:h-[586px] lg:w-[586px] lg:static absolute">
        <img 
          src="../../assets/img/new-product.png" 
          class="lg:h-[586px] lg:w-[586px] md:w-[780px]" 
          alt="XX99 Mark II Headphones"
        />
      </div>
    </div>
  </section>
  <section class="bg-white">
    <div class="lg:w-[75%] w-[90%] mx-auto">
      <div class="lg:my-16">
        <categories-menu/>
      </div>
    </div>
  </section>
</template>


<script setup>
  import CategoriesMenu from "@/components/molecules/CategoriesMenu/CategoriesMenu.vue"
</script>

<style scoped>
.mask-image {
  mask-image: 
    linear-gradient(to bottom, black, transparent), 
    linear-gradient(to left, black, transparent), 
    linear-gradient(to top, black, transparent);
  mask-composite: intersect;
  -webkit-mask-image: 
    linear-gradient(to bottom, black, transparent), 
    linear-gradient(to left, black, transparent), 
    linear-gradient(to top, black, transparent);
  -webkit-mask-composite: intersect;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}
</style>