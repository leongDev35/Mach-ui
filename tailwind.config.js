const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'background': 'background',
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'largepc': '1600px'

    },
    opacity: {
      '10': '0.1',
      '25': '0.25',
      '40': '0.40',
      '70': '0.70',
      '90': '0.90',
      '95': '0.95',
    }

  },
  plugins: [],
});
