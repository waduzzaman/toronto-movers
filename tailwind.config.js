// tailwind.config.js
/** @type {import('tailwindcss').Config} */ // JSDoc for editor autocompletion
module.exports = { // Use module.exports for .js config files generally
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Keep ts/tsx in case you mix later or copy from TS projects
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        secondary: "#10B981",
      },
    },
  },
  plugins: [],
};