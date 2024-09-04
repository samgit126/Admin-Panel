<script setup>
  import { ref } from 'vue';

  import InputData from '../components/Forms/InputData.vue';
  import Radio from '../components/Forms/Radio.vue';
  import File from '../components/Forms/File.vue';
  import Select from '../components/Forms/Select.vue';
  import Button from '../components/Forms/Button.vue';

  import { useConstantStore } from '../store/useConstantStore.js';

  const appConst = useConstantStore();
  const studyYears = ref([
        { id: 1, name: '1st Year'},
        { id: 2, name: '2nd Year'},
        { id: 3, name: '3rd Year'},
        { id: 4, name: '4th Year'},
        { id: 5, name: '5th Year'},
        { id: 6, name: '6th Year'},
        { id: 7, name: '7th Year'},
    ]);
  const genders = ref([
        { id: 1, name: 'Male'},
        { id: 2, name: 'Female'},
    ])

</script>
<template>
        <InputData 
          v-model="Phone_number" 
          :inputValue="Phone_number" 
          :type="appConst.INPUT_TYPE_TEXT" 
          :title="'Phone Number'" 
          :required="true"
          
          :message="Phone_number?? ''" 
          class="mt-12"/>
    <Radio 
          v-model="Sex"
          :inputValue="Sex" 
          :type="appConst.INPUT_TYPE_RADIO" 
          :title="'Select Gender'"
          :hasValidation ="true"
          :name="'gender'"
          :items="genders" 
          :required="true"
          :class="'md:ml-72 ml-0 mt-2'"
          :message="nnn ?? ''" />
    <File 
          :type="appConst.FILE_TYPE_IMAGE" 
          :title="'Upload Profile Photo'" 
          :fileFormat="'SVG, PNG, JPG or GIF'" 
          :required="true" 
          :inputId="'photo'"
          :selectedFile="photo" 
          v-model="photo"
          :message="photo ?? ''" 
          class="md:ml-72 "/> 
    <Select 
          v-model="year_of_study"
          :inputValue="year_of_study" 
          :title="'Current Study Year'"
          :items="studyYears" 
          :required="true"
          :message="year_of_study ?? ''" />
          <Button :Label="'Add User'" class="md:ml-72"/>
</template>