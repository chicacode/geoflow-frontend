/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: '#4C9FCe',
          light:'rgba(78, 168, 222, 0.26)',
          hover: 'rgba(78, 168, 222, 0.12)'
        },
        secondary:{
          DEFAULT: '#162E4C',
          light:'rgba(19, 41, 75, 0.26)',
          hover: 'rgba(76, 159, 200, 0.26)'
        },
        alert:{
          DEFAULT: '#ECC94B',
          light: '#FDF9EA',
          hover: 'rgb(236, 201, 75, 0.26)',
        },
        success:{
          DEFAULT: '#48BB78',
          light: '#E9F7EF',
          hover: 'rgb(72, 187, 120, 0.26)',
        },
        indigo:{
          DEFAULT: 'rgb(167, 99, 137)',
          light: 'rgb(167, 99, 137, 0.12)',
          hover: 'rgb(167, 99, 137, 0.26)',
        },
        black:'#000000',
        white:'#FFF',
        purple:{
          DEFAULT: '#a855f7',
          light:'#d8b4fe',
          hover: '#7e22ce',
          dark: '#581c87'
        },
        fuchsia: {
          DEFAULT: '#c026d3',
          light:'#f0abfc',
          hover: '#a21caf',
          dark: '#701a75',
        },
        pink:{
          DEFAULT: '#ec4899',
          light:'#f9a8d4',
          hover: '#be185d',
          dark: '#831843'
        },
        violet:{
          DEFAULT: '#8b5cf6',
          light:'#ddd6fe',
          hover: '#6d28d9',
          dark: '#4c1d95'
        },
        error:'rgb(245, 101, 101)',
        info:'#D1ECF1',
        gray:'#FCFCFC',
        grayText:'#BDBDC0',
        grayDark: '#EEF2F3',
        grayDarkOpacity26: 'rgba(189, 189, 192, 0.26)',
        grayDarkOpacity: 'rgba(189, 189, 192, 0.12)',
        grayDarkTitles: '#ACB1B4',
        secondaryInfo: '#2E435F',
        yellow:'#FBF191',
      },
    },
    fontFamily:{
      Poppins: ['Poppins','sans-serif'],
      Space: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}
