import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Retro Gaming Theme Colors
        retro: {
          purple: "hsl(var(--retro-purple))",
          "purple-dark": "hsl(var(--retro-purple-dark))",
          red: "hsl(var(--retro-red))",
          orange: "hsl(var(--retro-orange))",
          "orange-light": "hsl(var(--retro-orange-light))",
          yellow: "hsl(var(--retro-yellow))",
          blue: "hsl(var(--retro-blue))",
          "blue-bright": "hsl(var(--retro-blue-bright))",
          cyan: "hsl(var(--retro-cyan))",
          brown: "hsl(var(--retro-brown))",
          "brown-light": "hsl(var(--retro-brown-light))",
          black: "hsl(var(--retro-black))",
        },
        bitcoin: "hsl(var(--bitcoin))",
      },
      backgroundImage: {
        "retro-gradient":
          "linear-gradient(180deg, hsl(var(--retro-purple-dark)) 0%, hsl(var(--retro-purple)) 25%, hsl(var(--retro-red)) 50%, hsl(var(--retro-orange)) 75%, hsl(var(--retro-blue)) 100%)",
        "pixel-grid":
          "repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
      },
      fontFamily: {
        pixel: ["monospace"],
        retro: ["Orbitron", "monospace"],
      },
      textShadow: {
        pixel: "2px 2px 0px #000000, 4px 4px 0px rgba(0,0,0,0.5)",
        retro:
          "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pixel-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "retro-glow": {
          "0%, 100%": { textShadow: "0 0 5px currentColor" },
          "50%": { textShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pixel-float": "pixel-float 3s ease-in-out infinite",
        "retro-glow": "retro-glow 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-shadow-pixel": {
          textShadow: "2px 2px 0px #000000, 4px 4px 0px rgba(0,0,0,0.5)",
        },
        ".text-shadow-retro": {
          textShadow:
            "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
        },
        ".font-pixel": {
          fontFamily: "monospace",
          fontWeight: "bold",
        },
        ".retro-border": {
          border: "2px solid",
          borderImageSource:
            "linear-gradient(45deg, hsl(var(--retro-yellow)), hsl(var(--retro-orange)), hsl(var(--retro-red)), hsl(var(--retro-blue-bright)))",
          borderImageSlice: "1",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
