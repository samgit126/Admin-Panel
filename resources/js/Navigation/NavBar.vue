<script setup>
import { ref,onMounted } from 'vue';
import { useSidebarStore } from '../store/useSidebarToggle';
import { useDarkModeStore } from '../store/useDarkMode';
import NavBarSkeleton from './NavBarSkeleton.vue';
const store = useSidebarStore();
const darkModeStore= useDarkModeStore();
let isOpen = ref(false);
const loading = ref(true);
// Function to toggle the mobile menu
const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};
onMounted(async () => {
  // Simulate asynchronous data loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false; // Set loading to false after 2 seconds
});
</script>

<template>
    <div v-if="loading">
    <NavBarSkeleton/>
  </div>
  <div v-else class=" text-2xl font-bold dark:text-qmt-brand-opWhite150 dark:text-opacity-50 dark:shadow-2xl  dark:bg-qmt-brand-dark text-qmt-brand-white bg-qmt-brand-blue md:pb-4 md:pt-2 pt-4 pb-4 ">
  <div class=" float-left flex ml-2">
      <svg @click="store.toggleSidebar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentcolor" class="bi bi-list mt-1 dark:text-qmt-brand-opWhite150 dark:text-opacity-70" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>

<p class="ml-8 text-2xl font-serif pt-1 ">Admin Panel</p> 
<div class="ml-10">
            
            <form class="max-w-md mx-auto ml-10">   
                
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block md:w-full w-36 h-11  p-2 mt-1 ps-10 text-sm text-white border placeholder-white font-serif border-gray-300 rounded-lg bg-qmt-brand-dark dark:text-white dark:opacity-50 opacity-20 focus:outline-none md:focus:w-[600px] focus:w-[200px]" placeholder="Searching..." required />
            
                </div>
            </form>
            
                       </div>
  </div>
    <span class="float-right md:hidden">
      <button @click="toggleMobileMenu" class="absolute md:hidden right-1 mt-3 top-1.5 cursor-pointer text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" class="bi bi-list dark:text-qmt-brand-opWhite150 dark:text-opacity-70" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </button>
    </span>
    <button v-if="isOpen" @click="toggleMobileMenu" class="fixed right-0 left-0 bottom-0 top-0 h-full w-full cursor-default"></button>
    <ul class="md:flex md:float-right md:px-4 pt-2  px-10 md:pb-0 pb-10 md:static absolute
  md:w-auto w-52 top-14 duration-700 ease-in md:space-x-2 "
  :class="[isOpen? 'block w-1/4 space-y-1 ml-0 pl-1 pb-2 rounded-lg pt-3 mt-7 right-0 bg-qmt-brand-blue dark:bg-qmt-brand-dark ' : 'hidden']">
  <li>
    <div>
    <button @click="darkModeStore.toggleDarkMode" class="py-2 mt-0.5 rounded-md">
      <svg v-if="darkModeStore.isdarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon " viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
      </svg>

    </button>
   
  </div>
  </li>
  <li >
    <RouterLink>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentcolor" class="bi bi-bell mt-1 dark:text-qmt-brand-opWhite150 dark:text-opacity-70" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
      </svg>
    </RouterLink>
  </li>
  <li>
    <RouterLink>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentcolor" class="bi bi-gear mt-1 dark:text-qmt-brand-opWhite150 dark:text-opacity-70" viewBox="0 0 16 16">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
      </svg>
    </RouterLink>
</li>
<li>
 
    <RouterLink class="text-xl font-serif flex items-center space-x-2">
                        <div class="h-9 w-1 bg-gray-100 dark:bg-qmt-brand-opWhite150 dark:opacity-70"></div>
                        <img src="../../../public/img/ceo.jpg" class="w-7 h-7 mr-3 rounded-full"/>
                        <span class="ml-2">Samuel T</span>
                       
                    </RouterLink>
</li>

    </ul>
  </div>
</template>