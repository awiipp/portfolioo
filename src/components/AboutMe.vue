<template>
  <section
    id="about"
    class="w-full bg-slate-900 py-20 font-quicksand text-white"
  >
    <h1 class="text-4xl text-center font-bold mb-12">— Who Am I?</h1>

    <div
      class="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12 px-6"
    >
      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div
          id="card"
          class="md:grayscale md:brightness-75 md:hover:grayscale-0 md:hover:brightness-100 duration-300 overflow-hidden flex justify-center items-center"
        >
          <img
            src="../assets/about.jpg"
            alt="Study"
            class="rounded-xl w-[90%] max-w-md"
          />
        </div>
      </div>

      <!-- Text -->
      <div class="w-full md:w-1/2 text-left">
        <h2 class="text-4xl md:text-5xl font-medium mb-6">Sayid Arip</h2>
        <p class="text-base md:text-xl leading-relaxed">
          Hello! My name is Sayid Arip, and I am an 11th-grade student at SMK
          Negeri 46 Jakarta, located in Jakarta, Indonesia. I am majoring in
          Software Engineering and have a keen interest in the field of Web
          Development, especially in Back-End Development. In my free time, I
          enjoy sketching and immersing myself in books, which allows me to
          express my creativity and explore new ideas.
        </p>
      </div>
    </div>
  </section>
</template>
