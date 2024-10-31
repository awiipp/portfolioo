<script setup>
import Bg from './icons/svg/Topography.vue';
</script>

<template lang="">
  <div class="absolute bottom-0 overflow-hidden w-full -z-50">
    <Bg class="md:w-full min-h-screen" />
  </div>
  <div
    class="absolute bottom-0 overflow-hidden w-full h-72 bg-gradient-to-t from-slate-900 to-transparent -z-10"
  ></div>
  <div
    class="text-white w-full md:min-h-screen min-h-[97vh] flex flex-col-reverse md:flex-row justify-end font-quicksand"
  >
    <div
      class="md:w-1/2 w-full md:min-h-screen flex justify-center items-center mt-10 md:mt-0"
    >
      <div class="">
        <p class="md:text-5xl text-[25px] font-semibold">
          Hi, There! <span class="wave-hand">👋🏻</span>
        </p>
        <div class="typewriter-container">
          <p
            class="text-[38px] md:text-7xl font-bold typewriter py-3 -my-5 md:my-0"
          >
            I'm Sayid Arip
          </p>
        </div>
        <p class="text-[25px] md:text-5xl font-semibold text-slate-400">
          Web Developer
        </p>
      </div>
    </div>
    <div
      class="md:w-1/2 w-full md:min-h-screen flex items-center mt-24 md:mt-0"
    >
      <img
        src="../assets/icon.png"
        alt=""
        class="w-7/12 md:w-6/12 mx-auto rounded-full border-8 border-slate-800"
      />
    </div>
  </div>
</template>
<style lang=""></style>
