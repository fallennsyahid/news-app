<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Navbar from "./Navbar.vue";
import HeroSection from "./HeroSection.vue";

const articles = ref([]);
const loading = ref(true);

onMounted(async () => {
  const apiKey = "a9c7e0fa3fb91734714dde63c716d738";
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&token=${apiKey}`;

  try {
    const res = await axios.get(url);
    articles.value = res.data.articles;
  } catch (err) {
    console.error("Gagal memuat berita:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <!-- <span class="screen-widget"></span> -->
  <Navbar />
  <HeroSection />
  <div class="mx-auto p-4 sm:p-6 max-w-full" id="news-list">
    <h1
      class="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-10 text-center text-black"
    >
      📰 Hot News
    </h1>

    <div
      v-if="loading"
      class="flex justify-center items-center min-h-[50vh] sm:min-h-screen"
    >
      <div class="loader"></div>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-10"
    >
      <div
        v-for="article in articles"
        :key="article.url"
        class="bg-white h-85 md:h-105 lg:h-120 rounded-xl shadow-2xl transform hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col"
      >
        <img
          :src="article.image"
          :alt="article.title"
          class="aspect-video object-cover rounded-t-xl"
        />
        <div class="p-4 sm:p-6 flex flex-col flex-1">
          <h2
            class="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 truncate"
          >
            {{ article.title }}
          </h2>
          <p class="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 truncate">
            {{ article.description }}
          </p>
        </div>
        <div class="flex justify-center mx-4 sm:mx-6 mb-4">
          <a
            :href="article.url"
            target="_blank"
            class="inline-block py-2 sm:py-4 w-full bg-blue-700 text-center text-white font-semibold text-base sm:text-xl rounded-lg hover:bg-blue-800 hover:scale-105 transition duration-300 ease-linear active:scale-100 active:bg-blue-900"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 100px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #2761de;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}

/* .screen-widget {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px 50px;
  background: #000;
  color: #fff;
  border-bottom: none;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen-widget::after {
  position: absolute;
  content: "screnn: __";
}

@media (min-width: 640px) {
  .screen-widget::after {
    content: "screnn: sm";
  }
}

@media (min-width: 768px) {
  .screen-widget::after {
    content: "screen: md";
  }
}

@media (min-width: 1024px) {
  .screen-widget::after {
    content: "screen: lg";
  }
}

@media (min-width: 1280px) {
  .screen-widget::after {
    content: "screen: xl";
  }
}

@media (min-width: 1540px) {
  .screen-widget::after {
    content: "screen: 2xl";
  }
} */
</style>
