/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // in theme, you can override all initial methods from tailwind
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      "mid-md": "600px",
      md: "768px",
      // => @media (min-width: 768px) { ... }
      "mid-lg": "900px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      "mid-xl": "1100px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // in extend you can add new proprty style
      backgroundImage: {
        "home-mobile": "url(/CoffeeShop-Files/headerBgMobile.webp)",
        "home-desktop": "url(/CoffeeShop-Files/headerBgDesktop.webp)",
        "picture-body": "url(/CoffeeShop-Files/body-bg.png)",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        gray: {
          85: "#D9D9D9",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },

      container: {
        center: true,
        padding: { DEFAULT: "1rem", lg: "0.625rem" },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
