/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "clr-green": "var(--clr-green)",
        "clr-blue": "var(--clr-blue)",
        "clr-gray": "var(--clr-gray)",
        "clr-white": "var(--clr-white)",
        "clr-yellow": "var(--clr-yellow)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lora: ["Lora"],
      },
      fontSize: {
        "dynamic-xs": "clamp(0.875rem, 4vw, 1rem)",
      },
      padding: {
        dynamic: "clamp(2rem, 2rem, 4rem)",
      },
      boxShadow: {
        card: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
