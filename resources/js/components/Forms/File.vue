<script setup>
    import { computed, ref, onMounted } from 'vue';
    import { useConstantStore } from '../../store/useConstantStore.js'
    
    const emit = defineEmits(['update:modelValue']);
    const props = defineProps({
        type: Number,
        title: String,
        fileFormat: String,
        required: Boolean,

        selectedFile: {
            default: null
        },

        inputId: String,
        message: String,
    });
    
    const appConst = useConstantStore();
    
    const localFile = ref(null);
    const fileUrl = computed(() => localFile.value);

    function selectFile() {
        let element = document.getElementById(props.inputId);
        element.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            emit('update:modelValue', file);
            readFile(file);
        }
    };

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => localFile.value = e.target.result;
        reader.readAsDataURL(file);
    };

    onMounted(() => {
        if(props.selectedFile) {
            readFile(props.selectedFile);
        }
    })
    
</script>

<template>
    <div class="flex items-center text-qmt-brand-blue pt-4 w-full ">
        <div>
            <div class="flex space-x-2 items-center">
                <label class="text-base font-bold font-serif mb-2 dark:text-qmt-brand-white dark:text-opacity-70">{{ title }}</label>
                <span v-if="required" class="mb-2 text-base text-qmt-brand-danger">*</span>
                <span v-else class="mb-2 text-sm text-qmt-brand-blue dark:text-qmt-brand-yellow dark:text-opacity-70">(Optional)</span>
            </div>
            <label @click="selectFile"
                for="dropzone-file" 
                class="flex flex-col bg-gray-50 dark:bg-qmt-brand-dark items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed dark:border-qmt-brand-yellow dark:border-opacity-50 rounded-lg cursor-pointer dark:hover:bg-qmt-brand-dark">
                <div class="flex flex-col items-center justify-center pt-5 pb-6 p-2">
                    <img class="h-24 md:h-32 w-24 md:w-32 p-2" :src="fileUrl" v-if="fileUrl && type == appConst.FILE_TYPE_IMAGE"/>
                    <video controls class="h-24 md:h-32 w-24 md:w-full p-2" :src="fileUrl" v-if="fileUrl && type == appConst.FILE_TYPE_VIDEO"> </video>
                    <iframe class="w-full h-32" :src="fileUrl" v-if="fileUrl && type == appConst.FILE_TYPE_DOCUMENT"></iframe>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-qmt-brand-blue dark:text-qmt-brand-yellow dark:text-opacity-70 underline p-1">Click to upload</span> or drag and drop to here to upload {{ title}}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400"><span class="font-bold">Supported File Format :</span> {{ fileFormat }}</p>
                </div>
                <input  type="file" class="hidden" :id="inputId" @change="handleFileChange"/>
            </label>
            <span v-if="message" class="mb-2 text-xs text-qmt-brand-danger">{{ message }}</span>
        </div>
    </div> 
</template>
