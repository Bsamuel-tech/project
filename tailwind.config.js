/** @type {import('tailwindcss').Config} */
export default {
  safelist: ['bg-gray-50', 'text-gray-900', 'min-h-screen', 'flex', 'items-center', 'justify-center'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
