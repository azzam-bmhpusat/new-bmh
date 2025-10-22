/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          // '100%': { 'background-position': '-100%' },
        },
        tilt: { '0%,100%': { transform: 'rotate(-2deg)' }, '50%': { transform: 'rotate(2deg)' } },
        blinkLed: {
          '0%, 100%': {
            background: 'linear-gradient(to right, #ec4899, #f59e0b)', // pink → kuning
          },
          '25%': {
            background: 'linear-gradient(to right, #22c55e, #3b82f6)', // hijau → biru
          },
          '50%': {
            background: 'linear-gradient(to right, #e11d48, #f97316)', // merah → oranye
          },
          '75%': {
            background: 'linear-gradient(to right, #8b5cf6, #06b6d4)', // ungu → toska
          },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        tilt: 'tilt 6s infinite ease-in-out',
        blinkLed: 'blinkLed 3s infinite ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
