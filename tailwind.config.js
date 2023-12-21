/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0095FF",
        "custom-bg-color": "#d5f8ff",
        "custom-bg-nav-color": "#1b0322",
      },
      height: {
        "custom-height-landing-main": "290px",
        "custom-height-landing-plus": "250px",
      },
      width: {
        logo: "30px",
        heroImg: "350px",
        contactImg: "200px",
        contentHeroBox: '600px',
        navBorder: '1px'
      },
      screens: {
        mobile1: { max: "877px" },
      },
    },
  },
  plugins: [],
};

