<script setup>
import Laravel from "./icons/Laravel.vue";
import Tailwind from "./icons/Tailwind.vue";
import Vue from "./icons/Vue.vue";
import Js from "./icons/Js.vue";
import Php from "./icons/Php.vue";
import Bg from "./icons/svg/Topography.vue";
</script>

<template lang="">
  <div class="w-full text-center md:h-screen h-[140vh] relative">
    <div
      class="h-full bg-gradient-to-b from-slate-900 to-transparent via-transparent absolute z-0 inset-0"
    ></div>
    <div
      class="h-full bg-gradient-to-t from-slate-900 to-transparent via-transparent absolute z-0 inset-0"
    ></div>
    <div class="absolute overflow-hidden w-full -mt-1 -z-50">
      <Bg class="md:w-full md:h-screen h-[140vh]" />
    </div>

    <div class="relative z-10 top-20">
      <h1
        class="text-4xl pt-5 mb-10 md:pb-12 font-quicksand text-slate-100 font-bold"
      >
        — Skills —
      </h1>

      <div
        class="font-quicksand w-10/12 md:w-11/12 mx-auto flex flex-wrap justify-center"
      >
        <div
          class="md:w-[370px] w-[120px] bg-opacity-15 bg-slate-700 mx-2 my-2 hover:bg-opacity-50 duration-300 flex flex-col justify-center items-center py-5 rounded-xl backdrop-filter backdrop-blur-sm"
        >
          <Laravel />
          <p class="text-white md:text-xl font-normal mt-5">Laravel</p>
        </div>

        <div
          class="md:w-[370px] w-[120px] bg-opacity-15 bg-slate-700 mx-2 my-2 hover:bg-opacity-50 duration-300 flex flex-col justify-center items-center py-5 rounded-xl backdrop-filter backdrop-blur-sm"
        >
          <Tailwind />
          <p class="text-white md:text-xl font-normal mt-5">Tailwind CSS</p>
        </div>

        <div
          class="md:w-[370px] w-[120px] bg-opacity-15 bg-slate-700 mx-2 my-2 hover:bg-opacity-50 duration-300 flex flex-col justify-center items-center py-5 rounded-xl backdrop-filter backdrop-blur-sm"
        >
          <Js />
          <p class="text-white md:text-xl font-normal mt-5">Javascript</p>
        </div>

        <div
          class="md:w-[370px] w-[120px] bg-opacity-15 bg-slate-700 mx-2 my-2 hover:bg-opacity-50 duration-300 flex flex-col justify-center items-center py-5 rounded-xl backdrop-filter backdrop-blur-sm"
        >
          <Vue />
          <p class="text-white md:text-xl font-normal mt-5">Vue JS</p>
        </div>

        <div
          class="md:w-[370px] w-[120px] bg-opacity-15 bg-slate-700 mx-2 my-2 hover:bg-opacity-50 duration-300 flex flex-col justify-center items-center py-5 rounded-xl backdrop-filter backdrop-blur-sm"
        >
          <Php />
          <p class="text-white md:text-xl font-normal mt-5">PHP</p>
        </div>
      </div>
    </div>
  </div>
</template>
