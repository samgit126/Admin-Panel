import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    showSidebar: true
  }),
  actions: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar; // Toggle the value of showSidebar
    }
  }
});