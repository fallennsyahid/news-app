<script setup>
import { ref } from "vue";
import NavbarSearch from "./NavbarSearch.vue";
import axios from "axios";

const query = ref("");
const results = ref([]);
const error = ref("");
const loading = ref(false);

async function searchNews() {
  results.value = [];
  error.value = "";

  if (!query.value.trim()) {
    error.value = "Enter a search term";
    return;
  }

  loading.value = true;

  try {
    const res = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: query.value,
        lang: "en",
        apikey: "a9c7e0fa3fb91734714dde63c716d738",
      },
    });

    if (res.data.articles && res.data.articles.length > 0) {
      results.value = res.data.articles;
    } else {
      error.value = "No result found";
    }
  } catch (err) {
    error.value = "Error fetching news";
    console.error(err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <NavbarSearch />
  <h1 class="text-center text-3xl sm:text-4xl text-black font-bold my-6">
    🔍 Seacrh News
  </h1>
  <div class="flex items-center justify-center mb-10">
    <div
      class="relative bg-gray-200 w-4xl flex items-center px-4 rounded-lg shadow-md"
    >
      <input
        v-model="query"
        @keyup.enter="searchNews"
        type="search"
        placeholder="Search news..."
        class="flex-grow h-16 p-4 outline-none text-xl"
      />
      <button
        type="submit"
        @click="searchNews"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-lg text-white font-semibold cursor-pointer text-center h-full px-6 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  </div>
  <div class="border-t-2 block mx-4"></div>

  <div v-if="error">{{ error }}</div>

  <div v-if="loading" class="flex justify-center items-center mt-10 min-h-50">
    <div class="loader"></div>
  </div>

  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-10 mt-10"
  >
    <div
      v-for="article in results"
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
</style>
