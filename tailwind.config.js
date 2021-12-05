module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-p': 'var(--primary-color)',
        'my-s-bold': 'var(--secondary-color-bold)',
        'my-s-thin': 'var(--secondary-color-thin)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
