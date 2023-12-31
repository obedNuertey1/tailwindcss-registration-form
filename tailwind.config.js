/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "twitter-blue": "#1DA1F2",
        "custom-bg": "#1b1b32",
        "input-textarea-color": "#0a0a23",
        "main-bg": "#1b1b32"
      },
    },
  },
  plugins: [],
  corePlugins:{
    animation: ['responsive', 'hover']
  }
}

 