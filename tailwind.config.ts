import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        gradient: {
          yellow: "linear-gradient(180deg, #FFCF09 0%, #FFE26E 100%)",
          blue: "linear-gradient(180deg, #85CCFF 0%, #B3DFFF 100%)",
          pink: "linear-gradient(180deg, #FE8EBD 0%, #FFBFDA 100%)  ",
        },
        black: {
          100: "#131213",
          200: "#121212",
          300: "#1C1C1C",
        },
        green: {
          50: "#093E33",
          100: "#0A3E2E",
          200: "#083E32",
          400: "#0A3F2F",
          500: "#1B3B36",
          600:"#000200",
        },
        yellow: {
          100: "#F4D654",
        },
        cream: {
          50: "#FEF3E5",
          100: "#FEFDF5",
          200: "#FEFCF5",
          400: "#FAF3E5",
          500: "#F7F5F0",
          600: "#F7F4F1",
          1000: "#FFFCF5",
        },
        gray: {
          100: "#f2f2f2",
          200: "#EFEAE3",
          300: "#1C1C1C",
          400: "#171717",
          500: "#9ca3af",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        herosubtitle: "Be Vietnam Pro",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        '2xl': '1441px', 
        '3xl': '2300px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
