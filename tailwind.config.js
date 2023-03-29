/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{.css,.html}'],
  theme: {
    extend: {
      colors: {
        darkblue: 'rgb(0, 55, 103)',
        sand: 'rgb(234, 230, 222)',
        darksand: 'rgb(235, 217, 173)',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
