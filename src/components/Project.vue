<script setup>
import study from "@/assets/study.jpeg";
</script>

<template lang="">
  <div class="min-h-screen w-full pt-40 bg-slate-900 font-quicksand">
    <h1
      class="text-4xl pt-5 py-20 font-quicksand text-slate-100 text-center font-bold"
    >
<template>
  <div
    class="min-h-screen w-full bg-slate-900 pt-10 font-quicksand pb-20"
    id="project"
  >
    <h1 class="text-4xl py-20 text-slate-100 text-center font-bold">
      — Project —
    </h1>
    <div
      class="flex md:flex-row flex-col flex-wrap justify-center items-center w-11/12 md:w-10/12 mx-auto"
    >
      <div class="flex w-full flex-wrap justify-center">
        <!--  -->
        <div
          class="w-full md:w-3/12 md:h-[480px] overflow-hidden flex flex-col text-slate-200 m-5 bg-pink-300"
        >
          <div
            class="w-full md:h-[270px] h-[200px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: `url(${study})` }"
          ></div>
          <div
            class="w-full hover:bg-opacity-90 duration-300 md:h-[210px] bg-opacity-10 bg-gradient-to-l px-5 md:py-7 md:px-10 py-5 from-slate-800 to-slate-700 backdrop-filter backdrop-blur-md"
          >
            <div class="mb-5">
              <h1 class="font-bold text-lg md:text-xl mb-1">
                Lorem Impus! MWahahaha.
              </h1>
              <p class="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, odio!
              </p>
            </div>
            <div class="w-full flex justify-end">
              <a
                href="#"
                class="md:px-7 px-5 md:py-3 py-2 rounded-lg text-right bg-slate-400 text-slate-200 bg-opacity-20 hover:bg-opacity-40 duration-300 font-medium backdrop-filter backdrop-blur-md text-sm md:text-base"
                >Show</a
              >
            </div>
          </div>

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
          class="w-full md:w-3/12 md:h-[480px] overflow-hidden flex flex-col text-slate-200 m-5 bg-pink-300"
        >
          <div
            class="w-full md:h-[270px] h-[200px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: `url(${study})` }"
          ></div>
          <div
            class="w-full hover:bg-opacity-90 duration-300 md:h-[210px] bg-opacity-10 bg-gradient-to-l px-5 md:py-7 md:px-10 py-5 from-slate-800 to-slate-700 backdrop-filter backdrop-blur-md"
          >
            <div class="mb-5">
              <h1 class="font-bold text-lg md:text-xl mb-1">
                Lorem Impus! MWahahaha.
              </h1>
              <p class="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, odio!
              </p>
            </div>
            <div class="w-full flex justify-end">
              <a
                href="#"
                class="md:px-7 px-5 md:py-3 py-2 rounded-lg text-right bg-slate-400 text-slate-200 bg-opacity-20 hover:bg-opacity-40 duration-300 font-medium backdrop-filter backdrop-blur-md text-sm md:text-base"
                >Show</a
              >
            </div>
          class="w-full flex-1 md:px-10 px-5 py-5 bg-gradient-to-br from-slate-800 to-slate-700 group-hover:bg-opacity-90 transition-all duration-300 backdrop-filter backdrop-blur-md"
        >
          <div class="mb-3">
            <h1 class="font-bold text-lg mb-2">{{ project.title }}</h1>
            <p class="text-sm leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </div>
        <!--  -->
        <div
          class="w-full md:w-3/12 md:h-[480px] overflow-hidden flex flex-col text-slate-200 m-5 bg-pink-300"
        >
          <div
            class="w-full md:h-[270px] h-[200px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: `url(${study})` }"
          ></div>
          <div
            class="w-full hover:bg-opacity-90 duration-300 md:h-[210px] bg-opacity-10 bg-gradient-to-l px-5 md:py-7 md:px-10 py-5 from-slate-800 to-slate-700 backdrop-filter backdrop-blur-md"
          >
            <div class="mb-5">
              <h1 class="font-bold text-lg md:text-xl mb-1">
                Lorem Impus! MWahahaha.
              </h1>
              <p class="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, odio!
              </p>
            </div>
            <div class="w-full flex justify-end">
              <a
                href="#"
                class="md:px-7 px-5 md:py-3 py-2 rounded-lg text-right bg-slate-400 text-slate-200 bg-opacity-20 hover:bg-opacity-40 duration-300 font-medium backdrop-filter backdrop-blur-md text-sm md:text-base"
                >Show</a
              >
            </div>
          </div>
        </div>
        <!--  -->
        <div
          class="w-full md:w-3/12 md:h-[480px] overflow-hidden flex flex-col text-slate-200 m-5 bg-pink-300"
        >
          <div
            class="w-full md:h-[270px] h-[200px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: `url(${study})` }"
          ></div>
          <div
            class="w-full hover:bg-opacity-90 duration-300 md:h-[210px] bg-opacity-10 bg-gradient-to-l px-5 md:py-7 md:px-10 py-5 from-slate-800 to-slate-700 backdrop-filter backdrop-blur-md"
          >
            <div class="mb-5">
              <h1 class="font-bold text-lg md:text-xl mb-1">
                Lorem Impus! MWahahaha.
              </h1>
              <p class="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, odio!
              </p>
            </div>
            <div class="w-full flex justify-end">
              <a
                href="#"
                class="md:px-7 px-5 md:py-3 py-2 rounded-lg text-right bg-slate-400 text-slate-200 bg-opacity-20 hover:bg-opacity-40 duration-300 font-medium backdrop-filter backdrop-blur-md text-sm md:text-base"
                >Show</a
              >
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

<script>
import imgStudy from '../assets/study.jpeg';

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Study Planner App',
          description:
            'A simple Vue.js-based planner to organize study schedules efficiently.',
          image: imgStudy,
          link: '#',
        },
        {
          id: 2,
          title: 'Digital Library UI',
          description:
            'A frontend interface for digital library management using TailwindCSS.',
          image: imgStudy,
          link: '#',
        },
        {
          id: 3,
          title: 'Anime Watchlist',
          description:
            'A web app to track and categorize anime series using Vue and Firebase.',
          image: imgStudy,
          link: '#',
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description:
            'My personal portfolio built with Vue 3, featuring smooth animations and responsive layout.',
          image: imgStudy,
          link: '#',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
