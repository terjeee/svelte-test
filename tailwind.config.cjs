/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "clr-green": "var(--clr-green)",
        "clr-gray": "var(--clr-gray)",
        "clr-white": "var(--clr-white)",
        "clr-yellow": "var(--clr-yellow)",
      },
    },
  },
  plugins: [],
};
