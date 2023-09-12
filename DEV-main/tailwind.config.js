/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'clear-sans': 'clear-sans',
      'darker-grotesque': 'Darker Grotesque'
    }
    ,
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '350',
      normal: '400',
      medium: '500',
      semibold: '650',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {},
  },
  plugins: [],
}

