<template lang="">
  <nav
    :class="[
      'text-white top-0 right-0 left-0 px-6 pt-4 pb-2 z-50 flex font-quicksand fixed duration-300',
      isScrolled
        ? 'bg-opacity-45 bg-slate-800 backdrop-filter backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <h1 class="text-2xl font-semibold mb-3 text-slate-200 font-platypi">
      A<span class="text-slate-300">wii</span
      ><span class="text-slate-400">pp</span>
    </h1>
    <ul
      class="text-white font-normal text-sm flex items-center justify-center -mt-2 ml-auto"
    >
      <li class="mx-5 text-base">
        <a href="/" class="hover:text-slate-300 font-normal">Home</a>
      </li>
      <li class="mx-5 text-base">
        <a href="/" class="hover:text-slate-300 font-normal">About Me</a>
      </li>
      <li class="mx-5 text-base">
        <a href="/" class="hover:text-slate-300 font-normal">Skill</a>
      </li>
      <li class="mx-5 text-base">
        <a href="/" class="hover:text-slate-300 font-normal">Experience</a>
      </li>
      <!-- <li class="mx-5 text-base">
        <a href="/" class="hover:text-slate-300 font-normal">Project</a>
      </li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isScrolled: false,
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
<style lang="">
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}
</style>
