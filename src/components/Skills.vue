<script setup>
import Laravel from './icons/Laravel.vue';
import Tailwind from './icons/Tailwind.vue';
import Go from './icons/Go.vue';
import Vue from './icons/Vue.vue';
</script>

<template lang="">
  <div class="w-full bg-slate-900 text-center">
    <h1 class="text-4xl pt-5 py-20 font-quicksand text-slate-100 font-bold">
      — Skills —
    </h1>

    <div class="font-quicksand w-11/12 mx-auto flex flex-wrap justify-center">
      <div
        class="w-[370px] bg-slate-800 mx-2 my-2 bg-opacity-45 hover:bg-opacity-70 duration-300 flex flex-col justify-center items-center py-5 rounded-2xl"
      >
        <Laravel />
        <p class="text-white text-xl font-normal mt-5">Laravel</p>
      </div>

      <div
        class="w-[370px] bg-slate-800 mx-2 my-2 bg-opacity-45 hover:bg-opacity-70 duration-300 flex flex-col justify-center items-center py-5 rounded-xl"
      >
        <Tailwind />
        <p class="text-white text-xl font-normal mt-5">Tailwind</p>
      </div>

      <div
        class="w-[370px] bg-slate-800 mx-2 my-2 bg-opacity-45 hover:bg-opacity-70 duration-300 flex flex-col justify-center items-center py-5 rounded-xl"
      >
        <Go />
        <p class="text-white text-xl font-normal mt-5">Go</p>
      </div>

      <div
        class="w-[370px] bg-slate-800 mx-2 my-2 bg-opacity-45 hover:bg-opacity-70 duration-300 flex flex-col justify-center items-center py-5 rounded-xl"
      >
        <Vue />
        <p class="text-white text-xl font-normal mt-5">Vue JS</p>
      </div>
    </div>

    <!-- <Tailwind />
    <Go />
    <Vue /> -->
  </div>
</template>
