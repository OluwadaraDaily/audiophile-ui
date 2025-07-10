<template>
  <div class="flex md:flex-row flex-col items-center justify-center md:gap-2 lg:gap-5 gap-10 px-6 py-12 md:mt-12">
    <router-link 
      to="/categories/headphones"
      class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col 
      items-center justify-end py-4 hover:cursor-pointer group flex-grow"
    >
      <div class="absolute top-[-30px]">
        <img src="@/assets/img/headphones.webp" class="w-[80px] h-[104px]" alt="Headphones">
      </div>
      <div class="flex flex-col items-center">
        <p class="mb-2 font-bold text-black">HEADPHONES</p>
        <p class="tertiary-btn sub-title text-black opacity-50 group-hover:text-primary">
          SHOP <right-arrow-icon/>
        </p>
      </div>
    </router-link>
    <router-link 
      to="/categories/speakers"
      class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col 
      items-center justify-end py-4 hover:cursor-pointer group flex-grow"
    >
      <div class="absolute top-[-30px]">
        <img src="@/assets/img/speakers.webp" class="w-[80px] h-[104px]" alt="Speakers">
      </div>
      <div class="flex flex-col items-center">
        <p class="mb-2 font-bold text-black">SPEAKERS</p>
        <p class="tertiary-btn sub-title text-black opacity-50 group-hover:text-primary">
          SHOP <right-arrow-icon/>
        </p>
      </div>
    </router-link>
    <router-link 
      to="/categories/earphones"
      class="h-[165px] w-[223px] rounded-lg bg-grey relative flex flex-col 
      items-center justify-end py-4 hover:cursor-pointer group flex-grow"
    >
      <div class="absolute top-[-30px]">
        <img src="@/assets/img/earphones.webp" class="w-[104px] h-[104px]" alt="Earphones">
      </div>
      <div class="flex flex-col items-center">
        <p class="mb-2 font-bold text-black">EARPHONES</p>
        <p class="tertiary-btn sub-title text-black opacity-50 group-hover:text-primary">
          SHOP <right-arrow-icon/>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
  // Imports
  import RightArrowIcon from "@/components/icons/RightArrow.vue";
</script>