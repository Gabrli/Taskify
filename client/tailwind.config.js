/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg-color": "#d5f8ff",
        "custom-bg-nav-color": "#1b0322",
        "custom-btn-color": "rgb(61, 3, 61)",
      },
      height: {
        "custom-height-landing-main": "370px",
        "custom-height-landing-plus": "250px",
        "custom-height-mobile-hero-text-content": "180px",
        "custom-height-mobile-footer": "750px",
        "custom-height-modal": "525px",
        "custom-height-modal-textarea": "130px",
        "custom-height-modal-inputs": "35px",
      },
      width: {
        logo: "30px",
        heroImg: "350px",
        mobileHeroImg: "150px",
        mobileTextContent: "350px",
        contactImg: "200px",
        maxContentHeroBox: "600px",
        minContentHeroBox: "300px",
        navBorder: "1px",
        mobileFooterImg: "150px",
        form: "320px",
        modalInputs: "250px",
        modal: "320px",
      },
      screens: {
        mobile1: { max: "877px" },
      },
      gridTemplateColumns: {
        "custom-grid": " repeat(3, 300px)",
      },
    },
  },
  plugins: [],
};

