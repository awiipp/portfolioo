<template>
  <div
    class="relative w-full bg-slate-900 pt-28 pb-10 font-quicksand text-white"
    id="home"
  >
    <div class="absolute inset-0 -z-50 overflow-hidden">
      <Bg class="w-full h-full" />
    </div>

    <div
      class="absolute bottom-0 w-full h-72 bg-gradient-to-t from-slate-900 to-transparent -z-10"
    />

    <div
      class="flex flex-col-reverse md:flex-row items-center justify-center gap-10"
    >
      <div
        class="w-full md:w-1/2 flex flex-col items-center md:items-start px-5 md:px-0"
      >
        <p class="text-[25px] md:text-5xl font-semibold">
          Hi, There! <span class="wave-hand">👋🏻</span>
        </p>
        <div class="typewriter-container">
          <p class="text-[38px] md:text-7xl font-bold typewriter py-3 md:py-5">
            I'm Sayid Arip
          </p>
        </div>
        <p class="text-[25px] md:text-5xl font-semibold text-slate-400">
          Web Developer
        </p>
      </div>

      <div class="w-full md:w-1/2 flex justify-center">
        <img
          src="../assets/icon.png"
          alt="Sayid Arip"
          class="w-7/12 md:w-6/12 rounded-full border-8 border-slate-800"
        />
      </div>
    </div>
  </div>
</template>
