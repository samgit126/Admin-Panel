import { defineStore } from 'pinia';

export const useConstantStore = defineStore('useConstantStore', () => {
 
    return {
        loginUrl: 'login',
        logoutUrl: 'logout',
        HomeUrl : '/',
        APP_THEME_DARK: 'dark',
        APP_THEME_LIGHT: 'light',
        
        APPLICANT_INDIVIDUAL: 1,
        APPLICANT_TEAM: 2,

        PERSONAL_INFORMATION: 1,
        PROJECT_INFORMATION: 2,
        MEMBER_DETAILS: 3,
        
        REG_HACKATON: 1,
        REG_PROJECT: 2,

        MALE: 1,
        FEMALE: 2,

        YES: 1,
        NO: 2,

        MAXIMUM_TEAM_NUMBER: 3,

        INPUT_TYPE_TEXT : 'text',
        INPUT_TYPE_RADIO : 'radio',
        INPUT_TYPE_NUMBER : 'number',
        INPUT_TYPE_EMAIL : 'email',

        FILE_TYPE_IMAGE: 1,
        FILE_TYPE_VIDEO: 2,
        FILE_TYPE_DOCUMENT: 3,

        POST_ANNOUNCEMENT: 0,
        POST_HACKATHON: 1,
        POST_PROJECT: 2,
        
        PENDING: 1,
        REJECTED: 2,
        SELECTED: 3,
        
        DIAMOND:1,
        PLATINIUM:2,
        GOLD:3,
        SILVER:4,
        BRONZE:5,

    };
});