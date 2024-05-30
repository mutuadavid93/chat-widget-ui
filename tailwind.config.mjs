export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "blue-message": "#508EF7",
        "gray-message": "#F1F5F9",
        "date-time": "#7E8591",
        "chat-message": "#020817",
        "transparent-white": "rgba(255, 255, 255, 0.87)",
      },
    },
  },
  plugins: [],
};
