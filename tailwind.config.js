/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E07B39",      // Primary CTA, H3 accents
        dark: "#1A1A1A",         // Headings/Nav, Footer bg
        bodyText: "#2C2C2C",     // Body text
        subtext: "#6B6B6B",      // Subtext
        cardBg: "#F5ECD7",       // Cards
        altBg: "#FFF8F0",        // Alternate Sections (Cream)
        borderCustom: "#E0D5C8", // Borders
      },
      fontFamily: {
        sans: ['Helvetica', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1200px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      spacing: {
        'section-desk': '80px',
        'section-mob': '48px',
      }
    },
  },
  plugins: [],
}
