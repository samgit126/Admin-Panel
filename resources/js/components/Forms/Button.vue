<script setup>
const props = defineProps({
    Label: String,
});
</script>
<template>
    <button class="bg-qmt-brand-blue w-36 h-10 mt-2 mb-6   text-white font-serif hover:bg-blue-900 rounded-lg shadow-lg">
        {{ Label }}
    </button>
</template>