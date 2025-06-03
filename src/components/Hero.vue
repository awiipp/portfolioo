<template>
  <div
    class="relative w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    id="home"
  >
    <div
      class="text-white w-full min-h-screen flex flex-col-reverse md:flex-row justify-center md:justify-end font-quicksand relative z-10"
    >
      <div
        class="md:w-1/2 w-full flex justify-center items-center mt-0 md:mt-0"
      >
        <div>
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

      <div class="md:w-1/2 w-full flex items-center mb-10 md:mt-10">
        <img
          src="../assets/icon.png"
          alt=""
          class="w-[63%] md:w-6/12 mx-auto rounded-full border-8 border-slate-800"
        />
      </div>
    </div>
  </div>
</template>
