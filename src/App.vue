<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Test from './components/Test.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Carousel from './components/Carousel.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import 'flowbite';

import { onMounted } from 'vue';
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from 'flowbite';

onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <!-- <TheWelcome /> -->
    <Navbar />
    <!-- <Test /> -->
    <Hero />
    <AboutMe />
    <!-- <Carousel /> -->
    <Skills />
  </main>
  <div class="min-h-screen"></div>
</template>

<style scoped></style>
