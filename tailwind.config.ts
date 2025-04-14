import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        ".border-border": {
          borderColor: theme("colors.border"),
        },
        ".bg-background": {
          backgroundColor: theme("colors.background"),
        },
        ".text-foreground": {
          color: theme("colors.foreground"),
        },
        ".text-primary": {
          color: theme("colors.primary.DEFAULT"),
        },
        ".text-primary-foreground": {
          color: theme("colors.primary.foreground"),
        },
        ".text-secondary": {
          color: theme("colors.secondary.DEFAULT"),
        },
        ".text-secondary-foreground": {
          color: theme("colors.secondary.foreground"),
        },
        ".text-muted": {
          color: theme("colors.muted.DEFAULT"),
        },
        ".text-muted-foreground": {
          color: theme("colors.muted.foreground"),
        },
        ".text-accent": {
          color: theme("colors.accent.DEFAULT"),
        },
        ".text-accent-foreground": {
          color: theme("colors.accent.foreground"),
        },
        ".text-destructive": {
          color: theme("colors.destructive.DEFAULT"),
        },
        ".text-destructive-foreground": {
          color: theme("colors.destructive.foreground"),
        },
        ".bg-primary": {
          backgroundColor: theme("colors.primary.DEFAULT"),
        },
        ".bg-primary-foreground": {
          backgroundColor: theme("colors.primary.foreground"),
        },
        ".bg-secondary": {
          backgroundColor: theme("colors.secondary.DEFAULT"),
        },
        ".bg-secondary-foreground": {
          backgroundColor: theme("colors.secondary.foreground"),
        },
        ".bg-muted": {
          backgroundColor: theme("colors.muted.DEFAULT"),
        },
        ".bg-muted-foreground": {
          backgroundColor: theme("colors.muted.foreground"),
        },
        ".bg-accent": {
          backgroundColor: theme("colors.accent.DEFAULT"),
        },
        ".bg-accent-foreground": {
          backgroundColor: theme("colors.accent.foreground"),
        },
        ".bg-destructive": {
          backgroundColor: theme("colors.destructive.DEFAULT"),
        },
        ".bg-destructive-foreground": {
          backgroundColor: theme("colors.destructive.foreground"),
        },
        ".bg-card": {
          backgroundColor: theme("colors.card.DEFAULT"),
        },
        ".text-card-foreground": {
          color: theme("colors.card.foreground"),
        },
        ".border-primary": {
          borderColor: theme("colors.primary.DEFAULT"),
        },
        ".border-secondary": {
          borderColor: theme("colors.secondary.DEFAULT"),
        },
        ".border-destructive": {
          borderColor: theme("colors.destructive.DEFAULT"),
        },
        ".ring-ring": {
          "--tw-ring-color": theme("colors.ring"),
        },
      };
      addUtilities(newUtilities);
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;

export default config;
