module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'indie-flower': ['"Indie Flower"', 'cursive'],
        'jacquard-12': ['"Jacquard 12 Charted"', 'sans-serif'],
        'jacquard-24': ['"Jacquard 24"', 'sans-serif'],
        'jacquarda-bastarda': ['"Jacquarda Bastarda 9 Charted"', 'sans-serif'],
        'jersey': ['"Jersey 10"', 'sans-serif'],
        'poetsen-one': ['"Poetsen One"', 'sans-serif'],
        'titan-one': ['"Titan One"', 'sans-serif'],      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
