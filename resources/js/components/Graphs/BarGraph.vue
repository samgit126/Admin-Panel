<script setup>
import BarGraphSkeleton from './BarGraphSkeleton.vue';
import {ref,onMounted} from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const loading = ref(true);
const props = defineProps({
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
})
onMounted(async () => {
  // Simulate asynchronous data loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false; // Set loading to false after 2 seconds
});
</script>
<template>
  <div v-if="loading">
    <BarGraphSkeleton ml-72/>
  </div>
   <div v-if="!loading">
     
     <Bar :data="chartData" :options="chartOptions" class="shadow-2xl w-96"/>
   </div> 
</template>