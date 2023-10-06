/** @type {import('tailwindcss').Configuration} */
import withMT from "@material-tailwind/react/utils/withMT";
import tailwindcssTextFill from 'tailwindcss-text-fill';

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColors: {
        'instagram': ['#405DE6', '#5851DB', '#833AB4', '#C13584', '#E1306C', '#FD1D1D', '#F56040', '#FFDC80'],
      },
      transitionProperty: {
        all: "all",
      },
      boxShadow: {
        '3xl': '0 10px 10px rgba(0, 0, 0, 0.30)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
  },
  plugins: [tailwindcssTextFill],
});
