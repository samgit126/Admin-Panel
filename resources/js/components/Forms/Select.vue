<script setup>
    import { computed, ref } from 'vue';
    
    const emit = defineEmits(['update:modelValue']);
    
    const props = defineProps({
        title: String,
        message: String,
        items: Array | Object,
        required: Boolean,
        inputValue: Number | String | Boolean | Array | Object,
    });
</script>

<template>
    <div class="w-1/4 md:l-72 text-qmt-brand-blue pt-2">
        <div class="flex space-x-2 items-center">
            <label class="block text-base font-bold font-serif mb-2 dark:text-qmt-brand-white dark:text-opacity-70">{{ title }}</label>
            <span v-if="required" class="mb-2 text-base text-qmt-brand-danger">*</span>
            <span v-else class="mb-2 text-sm text-qmt-brand-blue dark:text-qmt-brand-yellow dark:text-opacity-70">(Optional)</span>
        </div>
        <select 
            :value="inputValue"
            :placeholder="title" 
            @input="emit('update:modelValue', $event.target.value)"
            class="py-2 px-4 w-full  bg-gray-50 border border-qmt-brand-blue border-opacity-50 rounded-lg text-base focus:outline-none focus:border-qmt-brand-blue  text-qmt-brand-blue dark:bg-qmt-brand-dark dark:border-qmt-brand-yellow dark:border-opacity-50 dark:text-qmt-brand-yellow dark:placeholder-qmt-brand-yellow dark:focus:ring-qmt-brand-yellow">
            <option :value="item.id" v-for="(item, itemIndex) in items" :key="itemIndex">{{ item.name }}</option>
        </select>
        <span v-if="message" class="mb-2 text-xs text-qmt-brand-danger">{{ message }}</span>
    </div>
</template>
