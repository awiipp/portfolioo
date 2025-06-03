<script setup>
import study from '@/assets/study.jpeg';

const projects = [
  {
    id: 1,
    title: 'Jejak Pemuda',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: study,
    link: '#',
  },
  {
    id: 2,
    title: 'Edutama',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.',
    image: study,
    link: '#',
  },
  {
    id: 3,
    title: 'Vitalmotion',
    description:
      'Lorem ipsum dolor sit amet, consectetur a eros eleifend elit.',
    image: study,
    link: '#',
  },
  {
    id: 4,
    title: 'SleepWell',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing vitae.',
    image: study,
    link: '#',
  },
];
</script>

<template>
  <div
    class="min-h-screen w-full bg-slate-900 pt-28 pb-20 font-quicksand"
    id="project"
  >
    <h1 class="text-4xl py-10 text-slate-100 text-center font-bold">
      — Project —
    </h1>

    <div class="flex flex-wrap justify-center gap-8 px-9 mx-auto">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-full sm:w-8/12 md:w-5/12 lg:w-3/12 h-[340px] rounded-3xl overflow-hidden flex flex-col text-slate-200 group bg-slate-800 bg-opacity-30 backdrop-blur-xl"
      >
        <div class="w-full h-[160px] overflow-hidden">
          <img
            :src="project.image"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            :alt="project.title"
          />
        </div>
        <div
          class="flex-1 w-full px-5 py-5 md:px-7 bg-gradient-to-br from-slate-800 to-slate-700 group-hover:bg-opacity-90 transition-all duration-300 backdrop-filter backdrop-blur-md"
        >
          <div class="mb-3">
            <h1 class="font-bold text-lg mb-2">{{ project.title }}</h1>
            <p class="text-sm leading-relaxed">{{ project.description }}</p>
          </div>
          <div class="flex justify-end mt-4">
            <a
              :href="project.link"
              class="px-4 py-2 rounded-lg bg-slate-500 bg-opacity-20 text-slate-100 hover:bg-opacity-40 transition duration-300 font-medium backdrop-blur-md"
              target="_blank"
            >
              Show
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Tambahkan gaya jika diperlukan */
</style>
