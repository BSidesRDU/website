/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['docs/**/*.html', 'docs/js/countdown-timer.js'],
  /*
  safelist: [
    'opacity-0',
    // if you ever use transform-based animations:
    '-translate-y-1',
    'translate-y-2',
  ],
// */
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      transitionDuration: {
        1500: '1500ms',
      },
    },
  },
  plugins: [],
};
