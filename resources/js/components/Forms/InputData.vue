<script setup>

    
    const emit = defineEmits(['update:modelValue']);
    
    const props = defineProps({
        type: Number | String | Boolean,
        title: String,
        message: String,
        required: Boolean,
        inputValue: Number | String | Boolean | Array | Object,
    });
</script>

<template>
    <div class="w-full md:ml-72 md:mt-4">
        <div class="flex space-x-2 items-center">
            <label class="text-lg font-bold font-serif mb-2 text-qmt-brand-blue dark:text-qmt-brand-white dark:text-opacity-70">{{ title }}</label>
            <span v-if="required" class="mb-2 text-base text-qmt-brand-danger">*</span>
            <span v-else class="mb-2 text-sm text-qmt-brand-blue dark:text-qmt-brand-yellow dark:text-opacity-70">(Optional)</span>
        </div>
        <input 
            :type="type" 
            :value="inputValue"
            :placeholder="title" 
            @input="emit('update:modelValue', $event.target.value)"
            class="placeholder-qmt-brand-blue appearance-none block w-96 px-3 py-2 border-2 border-qmt-brand-blue rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-qmt-brand-blue border-opacity-30 focus:border-opacity-100 text-qmt-brand-blue font-serif">
        <span v-if="message" class="mb-2 text-xs text-qmt-brand-danger">{{ message }}</span>
    </div>
</template>
