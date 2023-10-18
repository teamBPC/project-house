/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "fill": "fill",
      },
      backgroundImage: {
        "login-bg":
          "url(https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/874553a0-53db-4f85-34ce-28baece21e00/public)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
