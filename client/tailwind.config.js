/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: 'Poppins',
      },
      keyframes: {
        moveCursor_v1: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '10%': {
            transform: 'translateX(-28px)',
          },
          '20%': {
            transform: 'translateY(20px)',
          },
          '31.5%': {
            transform: 'translateX(10px) translateY(10px)',
          },
          '43.5%': {
            transform: 'translateX(-5px) translateY(5px)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
        moveCursor_v2: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '8%': {
            transform: 'translateX(20px) translateY(-10px)',
          },
          '25%': {
            transform: 'translateY(10px)',
          },
          '30%': {
            transform: 'translateX(8px) translateY(10px)',
          },
          '43%': {
            transform: 'translateX(7px) translateY(5px)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
        moveCursor_v3: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '8%': {
            transform: 'translateX(-20px) translateY(-25px)',
          },
          '20%': {
            transform: 'translateX(-15px)',
          },
          '30.5%': {
            transform: 'translateY(10px)',
          },
          '40.5%': {
            transform: 'translateX(7px) translateY(5px)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
      },
      animation: {
        moveCursor_v1: 'moveCursor_v1 5s infinite ease-in-out',
        moveCursor_v2: 'moveCursor_v2 5s infinite ease-in-out',
        moveCursor_v3: 'moveCursor_v3 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
