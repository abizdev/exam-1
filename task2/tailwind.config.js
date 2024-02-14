/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        amber: {
          '500': 'rgb(244, 240, 236)'
        },
        black: {
          DEFAULT: '#000000',
          '700': '#292F36'
        }
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '1320px'
        }
      }
    }
  },
  plugins: [],
};
