<template>
    <div class="skeleton-pie-chart">
      <div class="skeleton-slice" v-for="(item, index) in skeletonData" :key="index"></div>
    </div>
</template>
  
  <script setup>

  const skeletonData = [1, 2, 3, 4, 5]; // Array to determine the number of skeleton slices

  </script>
  
  <style>
  .skeleton-pie-chart {
    position: relative;
    width: 200px; /* Adjust size as needed */
    height: 200px; /* Adjust size as needed */
    border-radius: 50%;
    background-color: #f2f2f2; /* Background color of the pie chart */
  }
  
  .skeleton-slice {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 0%, 0% 0%, 0% 100%);
    background-color: #fff; /* Color of the slice */
    animation: rotate 1.5s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>