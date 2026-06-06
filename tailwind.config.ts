import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
        },
        gold: "hsl(var(--gold))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      fontSize: {
        display: [
          "clamp(3rem, 5vw + 1rem, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
        heading: [
          "clamp(2.25rem, 2.5vw + 1rem, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      maxWidth: {
        editorial: "72rem",
        measure: "65ch",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(15 23 42 / 0.04)",
        card: "0 1px 3px 0 rgb(15 23 42 / 0.05), 0 1px 2px -1px rgb(15 23 42 / 0.04)",
        lift: "0 18px 40px -20px rgb(15 23 42 / 0.18)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
