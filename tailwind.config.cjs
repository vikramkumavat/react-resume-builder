module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      boxShadow: {
        preview: '0 10px 30px rgba(15,23,42,0.12)'
      },
    },
  },
  plugins: [],
}
