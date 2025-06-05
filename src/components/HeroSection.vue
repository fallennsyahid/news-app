<template>
  <section
    id="hero-section"
    class="relative bg-gradient-to-br from-blue-800 via-blue-500 to-cyan-400 text-white py-32 px-8 text-center shadow-2xl overflow-hidden"
  >
    <!-- Decorative background shapes -->
    <div
      class="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -z-10"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl -z-10"
    ></div>

    <h1
      class="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl tracking-tight"
    >
      Welcome to <span class="text-cyan-200">News App</span>
    </h1>
    <p class="text-2xl md:text-3xl font-medium mb-8 text-white/90">
      Stay updated with the latest headlines and stories.
    </p>
    <a href="#news-list" class="flex items-center justify-center">
      <button
        class="mt-6 px-10 py-4 bg-white text-blue-700 font-bold rounded-full cursor-pointer shadow-lg hover:bg-cyan-100 hover:text-blue-900 transition-all duration-200 text-lg"
      >
        Get Started
      </button>
    </a>
  </section>
</template>
