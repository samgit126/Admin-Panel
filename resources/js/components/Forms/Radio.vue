<script setup>
    import { computed, ref, onMounted } from 'vue';
    
    const emit = defineEmits(['update:modelValue']);
    
    const props = defineProps({
        title: String,
        name: String,
        opClass: String,
        message: String,
        items: Array | Object,
        required: Boolean,
        hasValidation: Boolean,
        inputValue: Number | String | Boolean | Array | Object,
    });

    const inputId = computed(() => (item) => 'input_radio_' + props.name + '_' + item.name);

    onMounted(() => {
        setTimeout(
            () => {
                let itemToSelect = props.items.find(itm => itm.id == props.inputValue);
                if(itemToSelect && props.inputValue) {
                    document.getElementById(inputId.value(itemToSelect)).click();
                }
            }, 
            100
        );
    });
</script>

<template>
    <div :class="opClass">
        <div class="text-lg md:text-base font-serif self-center text-qmt-brand-blue font-bold mb-2 pt-2 dark:text-qmt-brand-white dark:text-opacity-70">
            {{ title }}
            <span v-if="required" class="mb-2 text-sm md:text-base text-qmt-brand-danger">*</span>
            <span v-else class="mb-2 text-sm text-qmt-brand-blue dark:text-qmt-brand-white dark:text-opacity-70">(Optional)</span>
        </div>
        <div class="flex space-x-0">
            <div v-for="(item, itemIndex) in items" 
                :key="itemIndex"
                class="w-40 self-center">
                <label 
                    :class="{ 
                        'border border-qmt-brand-blue border-opacity-50  dark:border-qmt-brand-yellow dark:border-opacity-50': inputValue == item.id 
                    }"
                    class="flex cursor-pointer p-2 md:p-3 w-28 bg-qmt-brand-white dark:bg-qmt-brand-dark border border-gray-200 dark:border-qmt-brand-yellow dark:border-opacity-70 rounded-lg text-base focus:border-qmt-brand-blue focus:ring-qmt-brand-blue">
                    <input 
                        type="radio" 
                        :name="name"
                        :value="item.id"
                        :placeholder="title" 
                        :id="inputId(item)"
                        @input="emit('update:modelValue', $event.target.value)"
                        class="mt-0.5 bg-gray-50 text border-gray-200 rounded-full  focus:ring-qmt-brand-blue">
                    <span class="text-sm md:text-base text-gray-500 dark:text-qmt-brand-yellow dark:text-opacity-70 ms-3">{{item.name}}</span>
                </label>
            </div>
        </div>
        <span v-if="message" class="mb-2 text-xs text-qmt-brand-danger">{{ message }}</span>
    </div>
</template>
