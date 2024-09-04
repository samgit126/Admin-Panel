<script setup>
import { ref, onMounted } from 'vue';
import CardSkeleton from './CardSkeleton.vue';
const loading= ref(true);
const props= defineProps({
    title:String,
    Icon:Object,
    Descrption:String,
})
onMounted(async () => {
  // Simulate asynchronous data loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false; // Set loading to false after 2 seconds
});
</script>
<template>
  <div v-if="loading" class=""><CardSkeleton /></div>
  <div v-else class="bg-qmt-brand-white mt-16  dark:bg-qmt-brand-dark hover:bg-qmt-brand-blue rounded-lg shadow-2xl border-b-4 border-b-qmt-brand-blue hover:text-white top-0 h-28 w-auto">
    <div class="bg-qmt-brand-blue  relative  hover:animate-bounce px-5 py-2 ter border border-qmt-brand-blue border-opacity-20 text-qmt-brand-white rounded-md dark:text-qmt-brand-white dark:text-opacity-70">
    <div class="text-xl self-center text-center p-1">
    <div class="text-sm sm:text-lg break-words text-left font-serif flex items-center space-x-1">
        <span>{{title}} </span>
        <Icon class="h-6 w-6 text-white" />
    </div>
    </div>
    </div>
    <h1 class="mt-5 ml-8 text-xl font-serif ">{{ Descrption }}</h1>
  </div> 
</template>
