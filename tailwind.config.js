module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
