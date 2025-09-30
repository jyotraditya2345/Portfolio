/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#030712',
        abyssLight: '#0b162f',
        abyssDeep: '#020817',
        gold: '#f4c15d',
        treasure: '#c98a4b',
        ember: '#f28c38',
        ocean: '#0d1b2a',
        oceanLight: '#1b2a4b',
        oceanDark: '#01040d',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(242, 140, 56, 0.45)',
        abyss: '0 15px 45px rgba(3, 7, 18, 0.65)',
      },
      backgroundImage: {
        'hero-sky': 'radial-gradient(circle at 20% 20%, rgba(49, 72, 120, 0.45), transparent 55%), radial-gradient(circle at 80% 10%, rgba(25, 42, 82, 0.55), transparent 60%), linear-gradient(180deg, #030712 0%, #050b1b 40%, #01040d 100%)',
        'island-mist': 'radial-gradient(circle, rgba(27, 42, 75, 0.4), rgba(3, 7, 18, 0.95))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(244, 193, 93, 0.4)' },
          '50%': { boxShadow: '0 0 28px rgba(242, 140, 56, 0.8)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(-1deg)' },
          '50%': { transform: 'translateX(5px) rotate(1deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
        sway: 'sway 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

