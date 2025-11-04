/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sanctum-cyan': {
          300: '#87CFE1',
          400: '#5EC4DB',
          500: '#35B9D5',
          600: '#2A94AC',
          700: '#1F6F83',
        },
        'sanctum-gray': {
          800: '#1E293B',
        },
      },
    },
  },
  plugins: [],
};
