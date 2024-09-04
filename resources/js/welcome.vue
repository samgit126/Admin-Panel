<template>
  <div class="md:flex md:items-center md:space-x-2">
    <Card title="Users" :Icon="UserGroupIcon" Descrption="13K"/>
    <Card title="Products" :Icon="DesktopComputerIcon" Descrption="2.01K"/>
    <Card title="Revenue" :Icon="CurrencyEuroIcon" Descrption="15M"/>
  </div>


     <div class="dark:bg-qmt-brand-dark" :class="[store.showSidebar?'md:flex md:mb-12 items-center md:ml-72 md:mt-1 space-x-2 ml-0 ':'md:ml-16 md:pb-10 mt-1 md:mt-0 md:flex space-x-2 md:space-x-4 table-auto' ]">
          <ProductTable  tableTitle="Product List Table" :TableData="tableData" :Headers="Headers"/>
          <ProductTable class="ml-16 md:mt-1 mt-12" tableTitle="Product Sold This year" :TableData="table" :Headers="Header"/>
        
        </div>
      <div :class="[store.showSidebar?'md:flex items-center md:ml-64 mt-0 ml-2  dark:bg-qmt-brand-dark ':'md:ml-16 md:mt-0 ml-0 md:flex space-x-0 md:space-x-4 table-auto dark:bg-qmt-brand-dark' ]">
       <div class="ml-4">
         <BarGraph :chartData="data" :chartOptions="Options"/>
       </div>
       <div class="ml-4">
         <BarGraph :chartData="data2" :chartOptions="Options2"/>
       </div>
       <!-- <div :class="[store.showSidebar?'md:w-1/2 md:ml-16 px-16 w-full dark:bg-qmt-brand-dark':'md:w-1/2 md:ml-6 px-16 w-full dark:bg-qmt-brand-dark' ]">
        <PieGraph/>
       </div> -->
      </div>
      
  </template>
  <script setup>
  import { ref } from 'vue';
  import { UserGroupIcon,
    DesktopComputerIcon,
    CurrencyEuroIcon
   } from '@heroicons/vue/outline';

  import ProductTable from './components/Table/ProductTable.vue';
  import BarGraph from './components/Graphs/BarGraph.vue';
  import PieGraph from './components/Graphs/PieGraph.vue';
  import Card from './components/Card/Card.vue';
  
  import { useSidebarStore } from './store/useSidebarToggle.js';
  const store= useSidebarStore();

  //data for graph 1
  const data = ref({
          labels: ['October', 'November', 'December', 'January'],
          datasets: [
            {
              label: 'Total Active Users',
              backgroundColor: 'rgba(66, 19, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: [95, 59, 80, 8]
            }
          ]
  })
  const Options = ref({
      scales: {
            y: {
              beginAtZero: true
            }
          }
  })
  //data for graph 2
  const data2 = ref({
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              label: 'Sales Per Month',
              backgroundColor: 'rgba(10, 192, 100, 0.9)',
              borderColor: 'rgba(7, 192, 12, 1)',
              borderWidth: 6,
              data: [65, 40, 99, 81]
            }
          ]
  })
  const Options2 = ref({
      scales: {
            y: {
              beginAtZero: true
            }
          }
  })
  //table header for the component 
  const Headers = ref([
          {Header_1:'Product Name',Header_2:'Color',Header_3:'Category',Header_4:'Price'},
  ])
  const Header = ref([
          {Header_1:'Product Name',Header_2:'Category',Header_3:'Quantity',Header_4:'Total Price'},
  ])
  //table row data 
  const tableData = ref([
          { Row1: 'Computer', Row2: 'Blue',Row3:'PC',Row4:'13K Birr'},
          { Row1: 'Shoes', Row2: 'Black',Row3:'Sport',Row4:'1340 Birr'},
          { Row1: 'Pen', Row2: 'All',Row3:'Staionary',Row4:'1400 birr'},
      ]);
  const table=ref([
          { Row1: 'Computer', Row2: 'PC',Row3:'2',Row4:'26000 Birr'},
          { Row1: 'Pen', Row2: 'Blue and Red',Row3:'410',Row4:'2600 Birr'},   
  ])
  </script>