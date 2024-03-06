/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9574D9",
        "secondary-color": "#9EEDFE",
        "tertiary-color": "#E34BD1",
        "background-color-first": "#030A13",
        "background-color-second": "#170B24",
      },
      fontFamily: {
        "primary-font": ["Nextstep"],
        "secondary-font": ["Roboto"],
      },
    },
  },
  plugins: [],
};
