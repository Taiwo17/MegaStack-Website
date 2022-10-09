/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-base': ' #25284b',
        'neutral-black': '#111222',
        'primary-color': '#247ab5',
        'variant-color': '#55a5db',
        'yellowish-color': '#f5a506',
        'white-color': ' #fff',
        'secondary-base-background': ' #25284b',
        'menu-color': '#fafafa',
      },
      width: {
        172: '172.7408px',
        60: '814px',
      },
      height: {
        92: '92px',
        44: '44px',
        64.5: '1032px',
        18: '291px',
      },
      padding: {
        8: '8.125rem',
        9: '136px',
        10: '50px',
        23: '17.5625rem',
        136: '136px',
      },
      fontFamily: {
        Sora: ['Sora', 'sans - serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/blobs.png')",
      },
      fontSize: {
        10: '75px',
        32: '2rem',
      },
    },
  },
  plugins: [],
};
