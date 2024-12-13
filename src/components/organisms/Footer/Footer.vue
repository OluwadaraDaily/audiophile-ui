<template>
  <footer class="bg-black text-white">
    <div class="w-[90%] mx-auto flex flex-col items-center md:items-start">
      <div class="border-[4px] w-[100px] border-primary"></div>
      <div class="py-10 flex flex-col items-center md:items-start gap-8">
        <logo />
        <ul class="flex flex-col text-center md:text-left md:flex-row md:items-center gap-4">
          <li>
            <router-link class="sub-title hover:text-primary" to="/">HOME</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/headphones">HEADPHONES</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/speakers">SPEAKERS</router-link>
          </li>
          <li>
            <router-link class="sub-title hover:text-primary" to="/earphones">EARPHONES</router-link>
          </li>
        </ul>
        <p class="p opacity-50 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div class="flex flex-col items-center md:items-start gap-8 md:flex-row md:justify-between w-full">
          <p class="p font-bold opacity-50">
            Copyright 2024. All Rights Reserved
          </p>
          <div class="flex items-center gap-4">
            <a href="https://www.facebook.com/oloyeleo" class="group" target="_blank">
              <facebook class="group-hover:stroke-primary"/>
            </a>
            <a href="https://www.instagram.com/oluwadara_daily" class="group" target="_blank">
              <instagram/>
            </a>
            <a href="https://www.twitter.com/oluwadaradaily" class="group" target="_blank">
              <twitter/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script setup>
import Logo from '@/components/icons/Logo.vue';
import Facebook from '@/components/icons/Facebook.vue';
import Twitter from '@/components/icons/Twitter.vue';
import Instagram from '@/components/icons/Instagram.vue';
</script>