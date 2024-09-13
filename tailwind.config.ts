// import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     backgroundImage: {
//       "radial-gradient": "radial-gradient(circle at 50% 40%, white, black)",
//     },
//     extend: {
//       colors: {
//         themeBlack: "#09090B",
//         themeGray: "#27272A",
//         themeDarkGray: "#27272A",
//         themeTextGray: "#B4B0AE",
//         themeTextWhite: "#F7ECE9",
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backgroundImage: {
      "radial-gradient": "radial-gradient(circle at 50% 40%, white, black)",
    },
    extend: {
      colors: {
        themeBlack: "#09090B",
        themeGray: "#27272A",
        themeDarkGray: "#1F1F23",
        themeTextGray: "#B4B0AE",
        themeTextWhite: "#F7ECE9",
        themePurple: "#c70ff0", // Adding a primary purple color
        themeDarkPurple: "#4E3A69", // Darker purple for contrast

        // Adjusting the existing color scheme to incorporate purple and black tones
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1F1F23", // Dark background
        foreground: "#F7ECE9", // Light foreground

        primary: {
          DEFAULT: "#c70ff0", // Primary purple color
          foreground: "#F7ECE9", // Light text for readability on purple
        },
        secondary: {
          DEFAULT: "#4E3A69", // Secondary darker purple
          foreground: "#F7ECE9", // Light text
        },
        destructive: {
          DEFAULT: "#E74C3C", // Red for destructive actions
          foreground: "#F7ECE9",
        },
        muted: {
          DEFAULT: "#7F8C8D", // Muted grey
          foreground: "#F7ECE9",
        },
        accent: {
          DEFAULT: "#8E44AD", // Brighter accent purple
          foreground: "#F7ECE9",
        },
        popover: {
          DEFAULT: "#2C3E50", // Dark blue-grey for popovers
          foreground: "#F7ECE9",
        },
        card: {
          DEFAULT: "#1F1F23", // Match background for cards
          foreground: "#F7ECE9",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
