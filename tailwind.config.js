module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F8F8F8",

          secondary: "#ffffff",

          accent: "#000000",

          neutral: "#8a8f99",

          "base-100": "#FFFFFF",

          info: "#ffffff8a",

          success: "#ffffff",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#2a3648",

          secondary: "#1F2937",

          accent: "#B9CFEF",

          neutral: "#656970",

          "base-100": "#1F2937",

          info: "#98A8DD",

          success: "#1F2937",

          warning: "#F59E0B",

          error: "#F59E0B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
