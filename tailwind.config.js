const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  //prefix: "sushi-",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  purge: false, //If you have manually configured PurgeCSS outside of Tailwind
};
