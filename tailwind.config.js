/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F72717",
        text: "#00344E",
        secondary: "#f0f2f6",
        greyPrimary: "#8B8B8B",
        primayAlert: "#EB5757",
      },
      backgroundImage: {
        loginImage: "url('/Frame 1686560847.png')",
        loginImagedummy: "url('/image 3.png')",
      },
    },
    container: {
      center: true,
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
