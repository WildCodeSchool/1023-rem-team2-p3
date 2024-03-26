/* eslint-disable import/no-unresolved */
/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
import tailwindcssanimated from "tailwindcss-animated";
// eslint-disable-next-line import/no-extraneous-dependencies
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9574D9",
        "secondary-color": "#9EEDFE",

        "tertiary-color": "#E34BD1",
        "learnMore-color": "#F72585",

        "gradient-color1": "#E34BD1",
        "gradient-color2": "#43C2EF",
        "gradient-color3": "#9386E0",

        "background-color-first": "#030A13",
        "background-color-second": "#150E1B",
      },
      fontFamily: {
        "primary-font": ["Nextstep"],
        "secondary-font": ["Roboto"],
      },
    },
  },
  plugins: [tailwindScrollbar, tailwindcssanimated],
});
