/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        slideDown: {
          from: { height: "0px", opacity: 0, paddingBottom: "0px" },
          to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
          to: { height: "0px", opacity: 0, paddingBottom: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
        slideUp: "slideUp 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      colors: {},
    },
  },
  plugins: [],
};
