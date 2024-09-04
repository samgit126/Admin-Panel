<template>
    <div class="skeleton-bar-graph ml-72">
        <div class="skeleton-bar" v-for="(item, index) in skeletonData" :key="index"></div>
    </div>
</template>

<script setup>
const skeletonData = [1, 2, 3, 4, 5]; // Array to determine the number of skeleton bars
</script>

<style>
.skeleton-bar-graph {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.skeleton-bar {
    width: 100%;
    height: 20px; /* Adjust height as needed */
    background: linear-gradient(to right, #e0e0e0, #f0f0f0); /* Gradient effect */
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
    animation: pulse 1.2s infinite;
}

@keyframes pulse {
    0% {
        opacity: 0.6;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 0.6;
    }
}
</style>