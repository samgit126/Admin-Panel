<template>
    <div v-if="loading">
        <TableSkeleton/>
    </div>
        <div v-if="!loading" class="shadow-md sm:rounded-lg text-qmt-brand-blue dark:bg-qmt-brand-dark">
            <h1 class="ml-10 text-xl font-serif pb-2 self-center dark:text-qmt-brand-opWhite150 dark:text-opacity-70 ">{{ tableTitle }}</h1>
        <table  class=" md:text-[15px] dark:shadow-sm shadow-2xl shadow-qmt-brand-opWhite150 text-sm border border-collapse border-qmt-brand-blue border-opacity-10 text-left text-qmt-brand-blue dark:text-qmt-brand-opWhite150 dark:text-opacity-70">
                <thead class=" text-qmt-brand-blue font-serif uppercase  bg-gray-50 dark:bg-gray-700 dark:text-qmt-brand-opWhite150 dark:text-opacity-70">
                 <tr v-for="(header,index) in Headers" :key="index">
                    <th scope="col" class="px-6 py-3 border border-collapse border-qmt-brand-blue border-opacity-10">
                       {{ header.Header_1 }}
                    </th>
                    <th scope="col" class="px-6 py-3 border border-collapse border-qmt-brand-blue border-opacity-10">
                        {{header.Header_2}}
                    </th>
                    <th scope="col" class="px-6 py-3 border border-collapse border-qmt-brand-blue border-opacity-10">
                        {{header.Header_3}}
                    </th>
                    <th scope="col" class="px-6 py-3 border border-collapse border-qmt-brand-blue border-opacity-10">
                        {{ header.Header_4 }}
                    </th>
                </tr>
            </thead>
            <tbody v-for="(table, index) in TableData" :key="index">
                <tr class="odd:bg-white hover:bg-slate-50 hover:cursor-pointer font-serif odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border border-qmt-brand-blue dark:border-gray-700">
                    <th scope="row" class=" border border-collapse border-qmt-brand-blue border-opacity-10 px-6 py-4 font-serif text-qmt-brand-blue whitespace-nowrap dark:text-qmt-brand-opWhite150 dark:text-opacity-70">
                       {{ table.Row1}}
                    </th>
                    <td class="px-6 py-4 border border-collapse border-qmt-brand-blue  border-opacity-10">
                       {{ table.Row2}}
                    </td>
                    <td class="px-6 py-4 border border-collapse border-qmt-brand-blue  border-opacity-10">
                       {{table.Row3}}
                    </td>
                    <td class="px-6 py-4 border border-collapse border-qmt-brand-blue  border-opacity-10">
                        {{ table.Row4}}
                    </td>

                </tr>
            </tbody>
        </table>
         </div>

      
</template>
<script setup>
import TableSkeleton from './TableSkeleton.vue';
import { ref,onMounted } from 'vue';
const loading = ref(true);
const props = defineProps({
    tableTitle:String,
    Headers:{
        type:Array,
    },
    TableData:{
        Type:Array,
    }

})
onMounted(async () => {
  // Simulate asynchronous data loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false; // Set loading to false after 2 seconds
});
</script>