<script setup>
    import { computed, ref } from 'vue';
    
    const emit = defineEmits(['update:modelValue']);
    
    const props = defineProps({
        title: String,
        message: String,
        required: Boolean,
        row: Number,
        inputValue: Number | String | Boolean | Array | Object,
    });
</script>

<template>
    <div>
        <div class="flex space-x-2 items-center">
            <label class="text-base font-semibold mb-2 dark:text-white">{{ title }}</label>
            <span v-if="required" class="mb-2 text-base text-qmt-brand-danger">*</span>
            <span v-else class="mb-2 text-sm text-qmt-brand-blue">(Optional)</span>
        </div>
        <textarea 
            :rows="row"
            :type="type" 
            :value="inputValue"
            :placeholder="title" 
            @input="emit('update:modelValue', $event.target.value)"
            class="py-3 px-4 w-full bg-gray-50 border border-qmt-brand-blue border-opacity-50 rounded-lg text-base focus:border-qmt-brand-blue  text-qmt-brand-blue dark:bg-qmt-brand-dark dark:border-qmt-brand-yellow dark:text-qmt-brand-yellow dark:placeholder-qmt-brand-yellow dark:focus:ring-qmt-brand-yellow">
        </textarea>
        <span v-if="message" class="mb-2 text-xs text-qmt-brand-danger">{{ message }}</span>
    </div>
</template>
