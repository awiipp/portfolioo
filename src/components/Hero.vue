<script setup>
import HeroWave from './icons/svg/HeroWave.vue';
import HeroWave2 from './icons/svg/HeroWave2.vue';
</script>

<template lang="">
  <div class="absolute bottom-0 overflow-hidden w-full -z-50">
    <HeroWave2 />
  </div>
  <div class="absolute bottom-0 overflow-hidden w-full">
    <HeroWave />
  </div>
  <div class="text-white w-full min-h-screen flex font-quicksand">
    <div class="w-1/2 min-h-screen flex justify-center items-center">
      <div class="">
        <p class="text-4xl font-semibold">
          Hi, There! <span class="wave-hand">👋🏻</span>
        </p>
        <div class="typewriter-container">
          <p class="text-6xl font-bold typewriter py-3">I'm Sayid Arip</p>
        </div>
        <p class="text-4xl font-semibold text-slate-400">Web Developer</p>
      </div>
    </div>
    <div class="w-1/2 min-h-screen flex items-center">
      <img
        src="../assets/icon.png"
        alt=""
        class="w-7/12 mx-auto rounded-full border-8 border-slate-800"
      />
    </div>
  </div>
</template>
<style lang=""></style>
