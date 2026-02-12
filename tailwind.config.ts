import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Dark Luxury Theme (Daji - The Wilderness)
        primary: "#1A2F23", // Deep Forest Green
        secondary: "#3D2914", // Rich Earth
        accent: "#C5A059", // Muted Gold
        gold: "#C5A059", // Muted Gold alias
        // Palmer Inspiration
        "palmer-beige": "#f5f5f5",
        "palmer-charcoal": "#333333",
        "palmer-accent": "#C5A059",
        // Neutrals
        "off-white": "#F0EFEB", // Slightly warmer/darker off-white
        "gray-light": "#E8E6E1",
        "gray-medium": "#8B8680",
        dark: "#050505", // Jet Black
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-crimson)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-section": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sub": ["1.75rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "fade-in-slow": "fadeIn 1.5s ease-out forwards",
        "fade-in-up-slow": "fadeInUp 1.2s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.05)",
        medium: "0 4px 12px rgba(0,0,0,0.1)",
        large: "0 12px 24px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
