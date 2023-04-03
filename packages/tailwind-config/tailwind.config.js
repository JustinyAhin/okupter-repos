/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Apps
    'src/**/*.{html,js,svelte,ts}',

    // Packages
    '../../packages/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
