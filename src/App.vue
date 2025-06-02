<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Test from './components/Test.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Carousel from './components/Carousel.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import Footer from './components/Footer.vue';
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
  <main>
    <Navbar />
    <Hero />
    <AboutMe />
    <Skills />
    <Experience />
    <Project />
    <Footer />
  </main>
</template>

<style scoped></style>
