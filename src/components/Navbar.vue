<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// Handle scroll effect hanya untuk desktop
function handleScroll() {
  if (window.innerWidth > 768) {
    isScrolled.value = window.scrollY > 10;
  } else {
    isScrolled.value = false; // Nonaktifkan di mobile
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Navbar utama fixed dengan bg blur transparan -->
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md',
      isScrolled && window.innerWidth > 768
        ? 'bg-slate-900 bg-opacity-60 shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1 class="text-2xl font-semibold text-slate-200 font-platypi">
        A<span class="text-slate-300">wii</span
        ><span class="text-slate-400">pp</span>
      </h1>

      <!-- Tombol menu untuk mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white text-3xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <!-- Menu desktop -->
      <div class="hidden md:flex space-x-6 text-white font-semibold">
        <a href="#home" class="hover:text-slate-300">Home</a>
        <a href="#about" class="hover:text-slate-300">About Me</a>
        <a href="#skills" class="hover:text-slate-300">Skills</a>
        <a href="#experience" class="hover:text-slate-300">Experience</a>
        <a href="#project" class="hover:text-slate-300">Project</a>
      </div>
    </div>
  </nav>

  <!-- Sidebar mobile -->
  <transition name="slide" duration-300>
    <div
      v-if="isMenuOpen"
      class="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-slate-900 p-6 z-50 text-white font-normal text-lg flex flex-col space-y-6 shadow-lg"
    >
      <button @click="isMenuOpen = false" class="ml-auto text-4xl">
        &times;
      </button>
      <a href="#home" class="hover:text-slate-300" @click="isMenuOpen = false"
        >Home</a
      >
      <a href="#about" class="hover:text-slate-300" @click="isMenuOpen = false"
        >About Me</a
      >
      <a href="#skills" class="hover:text-slate-300" @click="isMenuOpen = false"
        >Skills</a
      >
      <a
        href="#experience"
        class="hover:text-slate-300"
        @click="isMenuOpen = false"
        >Experience</a
      >
      <a
        href="#project"
        class="hover:text-slate-300"
        @click="isMenuOpen = false"
        >Project</a
      >
    </div>
  </transition>
</template>

<style>
/* Efek slide sidebar */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}
</style>
