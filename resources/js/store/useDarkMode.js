// store.js
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore({
  id: 'isdarkMode',
  state: () => ({
    isdarkMode: localStorage.getItem('isdarkMode') === 'true',
  }),
  actions: {
    toggleDarkMode() {
      this.isdarkMode = !this.isdarkMode;
      localStorage.setItem('isdarkMode', this.isdarkMode.toString());
      document.body.classList.toggle('dark', this.isdarkMode);
    },
  },
});