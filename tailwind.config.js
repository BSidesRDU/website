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
    extend: {
      transitionDuration: {
        1500: '1500ms',
      },
    },
  },
  plugins: [],
};
