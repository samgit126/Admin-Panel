<template>
    <div class="flex h-screen fixed top-[70px]">
      <div class="w-64 bg-gray-100 rounded-r-lg shadow-md p-4">
        <div class="mb-4">
          <div class="h-8 bg-gray-300 rounded"></div>
        </div>
  
        <div v-for="n in sidebarLinks" :key="n" class="mb-2">
          <div class="h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
  
      <div class="flex-1 px-4">
        <!-- Your main content here -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sidebarLinks = ref(8); // Number of sidebar links
  </script>