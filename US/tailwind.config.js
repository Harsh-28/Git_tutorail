/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "system-stroke2": "#dadce0",
        "secondary-1": "#0073e6",
        "primary-50": "#8da4bf",
        "text-100": "#1c4980",
        "system-divider": "#dde5ea",
        "accent-blue-light": "#ddedff",
        "accent-red-light": "#fbebea",
        "accent-new-red": "#d63500",
        "aliceblue": "#e5f1fc",
        "accent-pink": "#e9407a",
        "text-white": "#fff",
        "pastel-royal-blue": "#3079e1",
        "pastel-neon-blue": "#6548ee",
        "system-background": "#f6f8fa",
        "status-success": "#05c165",
      }
    },
  },
  plugins: [],
}