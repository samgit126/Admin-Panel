import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { useConstantStore } from './useConstantStore';

export const useFrontStore = defineStore('useFrontStore', () => {
    const appConst = useConstantStore();

    const server = computed(() => (url) => url);
    const homeServer = computed(() => (url) => server.value('/' + url));

	const appTheme = useLocalStorage('theme', appConst.APP_THEME_LIGHT);
    const hasAppTheme = computed(() => appTheme.value);

    function changeAppTheme() {
        if(appTheme.value == false) return;

        if (appTheme.value == appConst.APP_THEME_LIGHT) {
            appTheme.value = appConst.APP_THEME_DARK;
            document.documentElement.classList.add(appConst.APP_THEME_DARK);
        } else {
            document.documentElement.classList.remove(appConst.APP_THEME_DARK);
            appTheme.value = appConst.APP_THEME_LIGHT;
        }
    }

    if(appTheme.value == appConst.APP_THEME_DARK) {
        document.documentElement.classList.add(appConst.APP_THEME_DARK);
    }

    return {
        appTheme, 
		hasAppTheme, 
		changeAppTheme,
		homeServer,
    }
});