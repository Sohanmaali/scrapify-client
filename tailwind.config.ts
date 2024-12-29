// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;




import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        relatedBlack: "var(--related-black)",
        relatedWhite:"var(--related-white)",
        foreground: "var(--foreground)",
        lightColor: "var(--light-color)",
        darkColor: "var(--dark-color)",
        mutedColor: "var(--muted-color)",
        secondaryDarkColor : "var(secondary-dark-color)",
        secondaryLightColor: "var(--secondary-light-color)",
        secondaryMutedColor: "var(--secondary-muted-color)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        smoothUpDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        'smooth-up-down': 'smoothUpDown 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

