<script setup>
import SideBar from './Navigation/SideBar.vue';
import NavBar from './Navigation/NavBar.vue';
</script>
<template>
<div class="relative h-screen w-full  dark:bg-qmt-brand-dark dark:text-qmt-brand-opWhite150 dark:text-opacity-70">
        <NavBar/>
        <SideBar/>
        <NavBar class="fixed top-0 left-0 right-0 z-50"/>
        
        <div >
            <RouterView class="fixed left-0 mt-16 ml-72 w-[500px]"/>
        </div>
    </div>
</template>