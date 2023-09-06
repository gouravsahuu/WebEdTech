/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...other config...

  // Enable JIT mode (Just-In-Time compilation)
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}',
  ],
};


