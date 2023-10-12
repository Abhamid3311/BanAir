import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F1131",
        secondary: "#FFA903",
        textClr: "#21283F",
        lightBg: "#FBF9F2"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
