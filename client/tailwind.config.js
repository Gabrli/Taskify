/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdarkcolor: "#0c040c",
        bglightcolor: "#fbf4fb",
        "custom-bg-color": "#d5f8ff",
        "custom-bg-nav-color": "#1b0322",
        "custom-border-nav": "#4c095f",
        "custom-btn-color": "#4f176d4d",
        "cutom-not-1": "#20262E",
        "custom-not-2": "#EEEE",
        "custom-not-3": "#f8f8f8",
        "custom-not-4": "#E9E8E8",
        "custom-header-dash": "#440653",
        "custom-dash-btn": "#870d7f4d",
        custom: "#512971",
        primary: "#d129c8",
        primary2: "#7e0c4933",
        primary3: "#d9268533",
        accent: "#F37BF7",
        secondary: "#7E0C49",
        text_dark: "#FCF8FC",
        text_light: "#070307",
        social_item: "#4f176d33",
        static1: "#ffffff1a",
        static2: "#0000001a",
        static3: "#ffffff08",
        static4: "#00000008",
        dark_popup: "#111",
        dark_popup_header: "#393E46",
        dark_notifications: "#323643",
        input1: "#31293A",
        input2: "#F2F0F4",
        btnForm1: "#7F19E6",
        dark1: "#222",
      },

      height: {
        "custom-height-landing-main": "350px",
        "custom-height-landing-plus": "250px",
        "custom-height-mobile-hero-text-content": "180px",
        "custom-height-mobile-footer": "400px",
        "custom-height-process-tile": "200px",
        "custom-height-order-process": "40px",
        "custom-height-modal": "500px",
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
        mobileHeroImg: "285px",
        mobileTextContent: "350px",
        contactImg: "200px",
        maxContentHeroBox: "600px",
        minContentHeroBox: "300px",
        navBorder: "1px",
        mobileFooterImg: "150px",
        form: "320px",
        modalInputs: "250px",
        customWidthOrderProcess: "40px",
        modal: "320px",
        notification: "350px",
        counter: "20px",
        taskW: "300px",
      },
      screens: {
        mobile1: { max: "877px" },
      },
      gridTemplateColumns: {
        "custom-grid": " repeat(3, 300px)",
        "custom-grid2": "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
