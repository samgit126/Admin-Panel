<template>
    <div v-if="loading" class="skeleton-table">
        <div class="skeleton-header">
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
        </div>
        <div class="skeleton-row" v-for="n in skeletonRows" :key="n">
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
            <div class="skeleton-cell"></div>
        </div>
    </div>
    <div v-else class="data-container shadow-md sm:rounded-lg text-qmt-brand-blue dark:bg-qmt-brand-dark">
        <h1 class="ml-10 text-xl font-serif pb-2 self-center dark:text-qmt-brand-opWhite150 dark:text-opacity-70">{{ tableTitle }}</h1>
        <table class="md:text-[15px] dark:shadow-sm shadow-2xl shadow-qmt-brand-opWhite150 text-sm border border-collapse border-qmt-brand-blue border-opacity-10 text-left text-qmt-brand-blue dark:text-qmt-brand-opWhite150 dark:text-opacity-70">
            <!-- Table content -->
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
const tableTitle = ref('Loading...');
const skeletonRows = 5; // Number of skeleton rows to show

// Simulate asynchronous data loading
setTimeout(() => {
    loading.value = false;
    tableTitle.value = 'Your Table Title'; // Set the actual table title
}, 2000); // Simulating a 2-second loading time

</script>

<style>
.skeleton-table {
    margin-top: 16px;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
}

.skeleton-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.skeleton-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.skeleton-cell {
    width: 100px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 4px;
}
</style>