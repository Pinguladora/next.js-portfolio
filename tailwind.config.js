/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        monts: ['var(--font-monts)', ...fontFamily.sans],
        majormono: ['"Major Mono Display"']
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        accent: '#073763',
        primary: '#009900', 
        primaryDark: '#cc99ff',
        secondary: '#334155',
        secondaryDark: '#F1F5F9',
        secondaryAccent: '#64748B',
        terciary: '#b91c1c',
        terciaryDark: '#60A5FA'
      },
      animation: {
        'bounce-short': 'bounce 2s infinite',
      },
    },
  },
  plugins: [
  ]
}
