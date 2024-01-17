/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg-color": "#d5f8ff",
        "custom-bg-nav-color": "#1b0322",
        "custom-border-nav": "#4c095f",
        "custom-btn-color": "rgb(61, 3, 61)",
        "cutom-not-1": "#20262E",
        "custom-not-2": "#913175",
        "custom-not-3": "#CD5888",
        "custom-not-4": "#E9E8E8",
        "custom-header-dash": "#440653",
        custom: "#512971",
        primary: "#D799E5",
        accent: "#F37BF7",
        secondary: "#CA92E8",
        text_dark: "#EAE9FC",
        text_light: "#040316",
        social_item: "#4f176d33",
        static1:"#0000001a"
      },

      height: {
        "custom-height-landing-main": "350px",
        "custom-height-landing-plus": "250px",
        "custom-height-mobile-hero-text-content": "180px",
        "custom-height-mobile-footer": "400px",

        "custom-height-modal": "525px",
        "custom-height-modal-textarea": "130px",
        "custom-height-modal-inputs": "35px",
        "custom-height-notyfication-list": "400px",
        "custom-height-counter": "20px",
        "custom-mobile-hero": "80%",
        "custom-height-nav-item": "48px",
      },
      width: {
        logo: "30px",
        heroImg: "350px",
        mobileHeroImg: "300px",
        mobileTextContent: "350px",
        contactImg: "200px",
        maxContentHeroBox: "600px",
        minContentHeroBox: "300px",
        navBorder: "1px",
        mobileFooterImg: "150px",
        form: "320px",
        modalInputs: "250px",
        modal: "320px",
        notyfication: "350px",
        counter: "20px",
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

