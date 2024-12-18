import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#282524',
        main: '#DCA35F',
        error: "#f35759",
        success: "#366912",
      },
      textColor: {
        primary: '#282524',
        contrast: '#DFC6A4',
      },
    },
  },
  plugins: [],
} satisfies Config;
