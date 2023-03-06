/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary10": "#6B8DE0",
        "primary30": "#416DD7",
        "primary50": "#2753BD",
        "primary70": "#1F4194",
        "primary90": "#162E6A",
        "secondary10": "#DCFDAF",
        "secondary30": "#C7FC7D",
        "secondary50": "#B0FB49",
        "secondary70": "#9BFA19",
        "secondary90": "#81DC05",
        "neutral10": "#E5E5E5",
        "neutral30": "#B3B3B3",
        "neutral50": "#808080",
        "neutral70": "#4D4D4D",
        "neutral90": "#000000",
        "danger10": "#FE5757",
        "danger30": "#FE2525",
        "danger50": "#F00101",
        "danger70": "#BC0101",
        "danger90": "#890101",
        "success10": "#4A77E2",
        "success30": "#01F998",
        "success50": "#01C77A",
        "success70": "#01935A",
        "success90": "#00603B",
        "warning10": "#FF8466",
        "warning30": "#FFC633",
        "warning50": "#FDB600",
        "warning70": "#CC9300",
        "warning90": "#996E00",
        "info10": "#6D56CD",
        "info30": "#6D56CD",
        "info50": "#5037B9",
        "info70": "#3F2B91",
        "info90": "#2E206A",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}