<template>
  <div class="bg-primary text-white lg:pt-12 py-12 rounded-md lg:mb-10 mb-8">
    <div class="lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8">
      <div class="relative sm:w-[172px] sm:h-[207px] md:w-[197px] md:h-[237px] lg:w-[410px] lg:h-[493px]">
        <img
          src="@/assets/img/speakers/zx9-speaker.png"
          class="lg:absolute lg:bottom-[0]"
          alt="ZX9 speaker image"
        />
      </div>
      <div class="w-[80%] mx-auto md:mx-0 md:w-[350px] lg:w-auto text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
        <h4 class="h1 lg:w-[261px]">ZX9 SPEAKER</h4>
        <p class="p lg:w-[349px]">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <router-link
          to="/categories/speakers/zx9-speaker"
          class="primary-btn bg-black text-white hover:bg-active-grey block w-max"
        >see product</router-link>
      </div>
    </div>
  </div>  
  <div class="sm:bg-zx7-speaker-sm md:bg-zx7-speaker-md lg:bg-zx7-speaker bg-cover bg-no-repeat py-12 rounded-md h-[320px] mb-8 flex items-center">
    <div class="w-[80%] mx-auto">
      <h4 class="h4 mb-8">ZX7 SPEAKER</h4>
      <router-link
        to="/categories/speakers/zx7-speaker"
        class="block w-max primary-btn bg-transparent border border-black text-black hover:bg-black hover:text-white"
      >see product</router-link>
    </div>
  </div>  
  <div class="flex flex-col md:flex-row mb-8 gap-4">
    <div 
      class="md:basis-[50%] h-[200px] rounded-md bg-cover md:bg-cover bg-no-repeat 
      sm:bg-yx1-earphone-sm md:bg-yx1-earphone-md bg-yx1-earphone"
    ></div>
    <div class="bg-grey rounded-md h-[200px] flex flex-col justify-center md:basis-[50%]">
      <div class="w-[80%] mx-auto">
        <h4 class="h4 mb-8">YX1 EARPHONES</h4>
        <router-link
          to="/categories/earphones/yx1-earphones"
          class="block w-max primary-btn bg-transparent border border-black text-black hover:bg-black hover:text-white"
        >see product</router-link>
      </div>
    </div>
  </div>  
</template>

<script setup>
</script>