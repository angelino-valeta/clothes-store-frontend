module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./src/**/*.vue",
      "./**/*.html",
      "./*.html",
      "./**/*.js",
      "./*.js",
      "./**/*.vue",
      "./*.vue",
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
   translate: ['motion-safe'],
   translate: ['motion-reduce'],
   translate: ['active'],
   transform: ['hover', 'focus'],
   boxShadow: ['active'],
   opacity: ['disabled'],
   textColor: ['visited'],
   backgroundColor: ['checked'],
   borderWidth: ['first'],
   borderWidth: ['last'],
   backgroundColor: ['odd'],
   backgroundColor: ['even'],
   textOpacity: ['dark'],
    },
  },
  plugins: [
    require('tailwindcss-question-mark'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
