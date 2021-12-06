module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-p': '#181d31',
        'my-s-bold': '#e6ddc4',
        'my-s-thin': '#f0e9d2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
