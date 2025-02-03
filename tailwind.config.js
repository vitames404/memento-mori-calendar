/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        '52': 'repeat(52, minmax(0, 1fr))',
        '30': 'repeat(30, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

