/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{html,js,vue,blade}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'qmt-brand': {
          blue: '#0b529c',
          yellow: '#fba81c', 
          pink: '#c62a82',
          white: 'white',
          black: 'black',
          dark: '#213547',
          darkOp100 : '#171923',
          opWhite50: '#F9FAFB',
          opWhite100: '#F3F4F6',
          opWhite150: '#E1EFFE',
          success: '#00a28a',
          primary: '#346cb0',
          danger: '#ea6759',
          info: '#0179a8',
          pink: '#b76ba3',
        },
      },
    },
  },
  plugins: [],
}
