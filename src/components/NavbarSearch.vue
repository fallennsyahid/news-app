<script setup></script>

<template>
  <nav class="bg-gray-200 shadow-md flex justify-between items-center h-20">
    <h1 class="text-3xl font-bold italic px-6">< News App /></h1>
    <div class="h-full relative">
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
    </div>
  </nav>
</template>
