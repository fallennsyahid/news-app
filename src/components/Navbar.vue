<!-- <script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";

const showSearch = ref(false);
const searchContainer = ref(null);
const searchInput = ref(null);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

watch(showSearch, (newVall) => {
  if (newVall) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
});

const handleOutsideClick = (e) => {
  if (searchContainer.value && !searchContainer.value.contains(e.target)) {
    showSearch.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script> -->

<template>
  <nav class="bg-gray-200 shadow-md flex justify-between items-center h-20">
    <h1 class="text-3xl font-bold italic px-6">< News App /></h1>
    <div class="h-full relative" ref="searchContainer">
      <ul class="h-full flex items-center">
        <li class="h-full group relative">
          <router-link
            to="/"
            class="text-2xl font-semibold h-full text-center flex justify-center items-center px-6 group-hover:bg-gray-400 transition duration-200"
          >
            Home
          </router-link>
        </li>
        <li class="h-full group relative">
          <router-link
            to="/search-news"
            class="text-2xl font-semibold h-full text-center flex justify-center items-center px-6 group-hover:bg-gray-400 transition duration-200"
          >
            Search
          </router-link>
        </li>
      </ul>

      <!-- <div
        :class="[
          'absolute top-20 right-2 bg-white w-[90vw] max-w-xl h-16 flex items-center justify-center transform origin-top transition duration-300 shadow-lg',
          showSearch ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        ]"
      >
        <input
          type="search"
          id="search-box"
          ref="searchInput"
          placeholder="Search news.."
          class="w-full h-full text-lg md:text-2xl text-black p-4 outline-none bg-transparent"
        />
        <label
          for="search-news"
          class="cursor-pointer text-2xl md:text-3xl mr-4 md:mr-6 text-black"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </label>
      </div> -->
    </div>
  </nav>
</template>
