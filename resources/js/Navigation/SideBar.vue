<script setup>
  import { ref, onMounted } from 'vue';
  import {useSidebarStore} from '../store/useSidebarToggle.js';
  import {
    ChartPieIcon,
    ViewGridIcon,
    PresentationChartLineIcon,
    FolderIcon,
    SelectorIcon,
    DocumentTextIcon,
    FolderAddIcon,
    CheckCircleIcon,
    ChartBarIcon,
    TableIcon,
    FolderDownloadIcon,
    CogIcon,
    UserAddIcon,
    ShoppingBagIcon,
    DesktopComputerIcon,
    ChartSquareBarIcon
    
    
  } from '@heroicons/vue/outline';
  import SidbarSkeleton from './SidbarSkeleton.vue';
  const store = useSidebarStore();
  const loading = ref(true);
  const isOpen = ref([false, false, false]);
  const isOpen_2 = ref([false, false, false]);
  const ActionMenu = [{
    title: 'Forms',
    icon: FolderDownloadIcon,
    children: [
            {
              title: 'Input Filled',
              icon: FolderAddIcon,
              
            },
            {
              title: 'Radio Buttons',
              icon: CheckCircleIcon,
              
            },
            {
              title: 'Select',
              icon: SelectorIcon,
              
            },
            {
              title:'File',
              icon: FolderIcon,
              
            },
            {
              title:'Text Area',
              icon:DocumentTextIcon,
              
            }
          ],
  },
  {
          title: 'Graphs',
          icon: PresentationChartLineIcon,
          children: [
            {
              title: 'Bar Graph',
              icon: ChartBarIcon,
             
            },
            {
              title: 'Pie Graph',
              icon: ChartPieIcon,
            
            },
            {
              title:'Line Graph',
              icon:PresentationChartLineIcon,
            
            }
          ],
        },
      {
        title:'Table',
        icon:TableIcon,
     
      }
      ];
    const GeneralMenu = [{
    title: 'General',
    icon: CogIcon,
    children_2: [
            {
              title: 'Manage User',
              icon: UserAddIcon,
            },
            {
              title: 'Manage Product',
              icon: ShoppingBagIcon,
            },
            {
              title: 'Apps Settings',
              icon: DesktopComputerIcon,
            },
          ],
  },
  {
          title: 'Analytics',
          icon: ChartSquareBarIcon,
          children_2: [
            {
              title: 'Reports',
              icon: ChartPieIcon,
            },
            {
              title: 'Insights',
              icon: ViewGridIcon,
            },
          ],
        },
      ];
const toggleSubMenu = (index) => {
  isOpen.value = isOpen.value.map((item, idx) => idx === index ? !item : false);
};
const toggleSubMenu_2 = (index_2) => {
  isOpen_2.value = isOpen_2.value.map((item, idx) => idx === index_2 ? !item : false);
};
onMounted(async () => {
  // Simulate asynchronous data loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false; // Set loading to false after 2 seconds
});
</script>
<template>
  <div v-if="loading">
    <SidbarSkeleton/>
  </div>
  <div v-else>

    <button v-if="store.showSidebar" @click="store.toggleSidebar" class="fixed right-0 left-0 bottom-0 top-0 h-full w-full cursor-default md:hidden"></button>
  <div  :class="[store.showSidebar? 'h-screen w-64 z-50 bg-qmt-brand-opWhite50 fixed top-[70px] text-qmt-brand-primary shadow-2xl dark:bg-qmt-brand-dark dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'w-16 h-screen dark:bg-qmt-brand-dark dark:text-qmt-brand-opWhite150 dark:text-opacity-70 text-qmt-brand-primary fixed top-[70px] md:block hidden bg-qmt-brand-opWhite50']">
    <div :class="[store.showSidebar?'ml-4 mt-4 flex items-center space-x-2':'ml-2 mt-2']">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" :class="[store.showSidebar?'':'w-10 h-10 border-b-2 border-b-qmt-brand-yellow pb-2']" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
      </svg>
      <span :class="[store.showSidebar?'text-lg font-serif block':'hidden']">DashBoard</span>
    </div>
    
    <div :class="[store.showSidebar?'ml-1 mt-4 flex items-center space-x-2 border-b-2':'mt-2']">
      <span :class="[store.showSidebar?'text-lg font-serif block pb-2 px-4' : 'hidden' ]">Utilities                                                                           </span>
    </div>
    
    <nav class="mt-2" :class="[store.showSidebar?'':'border-b-2 border-b-qmt-brand-yellow']">
      <ul>
          <li v-for="(item, index_1) in ActionMenu" :key="index_1" class="cursor-pointer " >
            <div @click="toggleSubMenu(index_1)" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-qmt-brand-darkOp100 ">
                <component :is="item.icon" :class="[store.showSidebar?'h-6 w-6 mr-2 text-qmt-brand-primary font-serif text-lg dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'dark:text-qmt-brand-opWhite150 dark:text-opacity-70 w-6 h-7 hover:text-qmt-brand-yellow']" />
                  <span :class="[store.showSidebar?'text-qmt-brand-primary font-serif text-lg block dark:text-qmt-brand-opWhite150 dark:text-opacity-70 ':'hidden ' ]">{{ item.title }}</span>
                  <svg v-if="item.children" :class="[store.showSidebar?' ml-auto h-5 w-5 text-lg font-serif text-qmt-brand-primary transform transition-transform duration-300 rotate-90 dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'hidden ']"
              
                 
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
            </div>
            <ul v-if="item.children && isOpen[index_1]" :class="[store.showSidebar?'bg-qmt-brand-opWhite50 dark:bg-qmt-brand-dark ml-10 border-l-2 border-l-qmt-brand-blue border-opacity-10 ':'bg-white z-50 px-0 fixed top-20 left-20 border-l-2 border-l-qmt-brand-blue border-opacity-10 shadow-lg dark:bg-qmt-brand-dark dark:text-qmt-brand-opWhite150 dark:text-opacity-70']">
                  <li v-for="(child_1, childIndex_1) in item.children" :key="childIndex_1"
                    :class="[store.showSidebar?'flex items-center md:px-3 px-1 py-1 hover:bg-gray-200 dark:hover:bg-qmt-brand-darkOp100':'md:px-4 hover:bg-gray-200']">
                    <component :is="child_1.icon" :class="[store.showSidebar?'h-5 w-5 mr-2 font-serif text-lg text-qmt-brand-primary block dark:text-qmt-brand-opWhite150 dark:text-opacity-70' :'hidden']" />
                    <span :class="[store.showSidebar?'text-qmt-brand-primary text-lg font-serif dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'text-[16px] font-serif']">{{ child_1.title }}</span>
                  </li>
            </ul>
          </li>
      </ul>
    </nav>
    
    <div :class="[store.showSidebar?'ml-1 mt-4 flex items-center space-x-2 border-b-2':'mt-2']">
      <span :class="[store.showSidebar?'text-lg font-serif block pb-2 px-4' : 'hidden' ]">Settings</span>
    </div>
    <nav>
      <ul>
          <li v-for="(item, index_2) in GeneralMenu" :key="index_2" class="cursor-pointer" :class="[store.showSidebar?'':'']">
            <div @click="toggleSubMenu_2(index_2)" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-qmt-brand-darkOp100">
                <component :is="item.icon" :class="[store.showSidebar?'h-6 w-6 mr-2 text-qmt-brand-primary  font-serif text-lg dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'dark:text-qmt-brand-opWhite150 dark:text-opacity-70 w-6 h-7 hover:text-qmt-brand-yellow']" />
                  <span :class="[store.showSidebar?'text-qmt-brand-primary font-serif text-lg block dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'hidden' ]">{{ item.title }}</span>
                  <svg v-if="item.children_2" :class="[store.showSidebar? 'ml-auto h-5 w-5 text-lg font-serif text-qmt-brand-primary transform transition-transform duration-300 rotate-90 dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'hidden']"
                    
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
            </div>
            <ul v-if="item.children_2 && isOpen_2[index_2]" :class="[store.showSidebar?'bg-qmt-brand-opWhite50 dark:bg-qmt-brand-dark ml-10 py-2 border-l-2 border-l-qmt-brand-blue border-opacity-10 z-50':'bg-white px-0 fixed top-20 left-20 border-l-2 border-l-qmt-brand-blue border-opacity-10 dark:bg-qmt-brand-dark dark:text-qmt-brand-opWhite150 dark:text-opacity-70 z-50']">
                  <li v-for="(child_1, childIndex_1) in item.children_2" :key="childIndex_1"
                  :class="[store.showSidebar?'flex items-center md:px-4 px-1 py-1 hover:bg-gray-200 dark:hover:bg-qmt-brand-darkOp100':'md:px-4 hover:bg-gray-200']">
                    <component :is="child_1.icon" :class="[store.showSidebar?'h-5 w-5 mr-2 font-serif text-lg text-qmt-brand-primary block dark:text-qmt-brand-opWhite150 dark:text-opacity-70' :'hidden']"/>
                    <span :class="[store.showSidebar?'text-qmt-brand-primary text-lg font-serif dark:text-qmt-brand-opWhite150 dark:text-opacity-70':'text-[16px] font-serif']">{{ child_1.title }}</span>
                  </li>
            </ul>
          </li>
      </ul>
    </nav>
  
  </div>
  </div>
</template>