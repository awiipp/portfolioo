<template lang="">
  <nav
    :class="[
      'text-white top-0 right-0 left-0 px-6 py-4 z-50 flex items-center font-quicksand md:fixed duration-300',
      isScrolled
        ? 'md:bg-opacity-45 md:bg-slate-800 md:backdrop-filter md:backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <!-- Logo -->
    <h1 class="text-2xl font-semibold text-slate-200 font-platypi">
      A<span class="text-slate-300">wii</span
      ><span class="text-slate-400">pp</span>
    </h1>

    <!-- Hamburger Icon for Mobile -->
    <div
      class="ml-auto lg:hidden hidden cursor-pointer z-50"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="block w-6 h-0.5 bg-white mb-1"></span>
      <span class="block w-6 h-0.5 bg-white mb-1"></span>
      <span class="block w-6 h-0.5 bg-white"></span>
    </div>

    <!-- Menu Items for Desktop -->
    <ul
      class="hidden lg:flex text-white font-normal text-sm items-center justify-center ml-auto space-x-5"
    >
      <li>
        <a href="#home" class="hover:text-slate-300 font-normal">Home</a>
      </li>
      <li>
        <a href="#about" class="hover:text-slate-300 font-normal">About Me</a>
      </li>
      <li>
        <a href="#skills" class="hover:text-slate-300 font-normal">Skills</a>
      </li>
      <li>
        <a href="#experience" class="hover:text-slate-300 font-normal"
          >Experience</a
        >
      </li>
      <li>
        <a href="#project" class="hover:text-slate-300 font-normal">Project</a>
      </li>
    </ul>

    <!-- Sidebar Menu for Mobile -->
    <transition name="slide" duration-300>
      <div
        v-if="isMenuOpen"
        class="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-slate-800 bg-opacity-95 p-6 z-40 text-white font-normal text-lg flex flex-col space-y-6 shadow-lg"
      >
        <button @click="isMenuOpen = false" class="ml-auto text-4xl">
          &times;
        </button>
        <a href="/" class="hover:text-slate-300">Home</a>
        <a href="/" class="hover:text-slate-300">About Me</a>
        <a href="/" class="hover:text-slate-300">Skill</a>
        <a href="/" class="hover:text-slate-300">Experience</a>
        <a href="/" class="hover:text-slate-300">Project</a>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
  transition-duration: 300ms;
}
.slide-enter {
  transform: translateX(-100%);
  transition-duration: 300ms;
}
.slide-leave-to {
  transform: translateX(-100%);
  transition-duration: 300ms;
}
</style>
