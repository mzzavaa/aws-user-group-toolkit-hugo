/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/ugtktheme/layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F2B52',
          light: '#3F3B62',
          dark: '#161E2D',
        },
        secondary: {
          DEFAULT: '#D8D8D8',
          light: '#E8E8E8',
          dark: '#B8B8B8',
        },
        purple: {
          DEFAULT: '#61449C',
          light: '#A66FF0',
          dark: '#4A3275',
        },
        accent: {
          purple: '#A66FF0',
          blue: '#61449C',
          pink: '#FF4EB8',
          yellow: '#FFD54F',
        },
        gray: {
          100: '#D8D8D8',
          200: '#C8C8C8',
          300: '#B8B8B8',
          400: '#A8A8A8',
          500: '#989898',
          600: '#787878',
          700: '#585858',
          800: '#383838',
          900: '#282828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'rotate': 'rotate 30s linear infinite',
        'morph': 'morph 15s linear infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '25%': {
            'background-position': 'right top',
          },
          '50%': {
            'background-position': 'right bottom',
          },
          '75%': {
            'background-position': 'left bottom',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.05)',
          },
        },
        'pulse': {
          '0%, 100%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1',
          },
        },
        'rotate': {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'morph': {
          '0%': {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '25%': { 
            'border-radius': '58% 42% 75% 25% / 76% 46% 54% 24%',
          },
          '50%': {
            'border-radius': '50% 50% 33% 67% / 55% 27% 73% 45%',
          },
          '75%': {
            'border-radius': '33% 67% 58% 42% / 63% 68% 32% 37%',
          },
          '100%': {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
        },
        'shimmer': {
          '0%': {
            'background-position': '-200% 0',
          },
          '100%': {
            'background-position': '200% 0',
          },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(166, 111, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(166, 111, 240, 0.05) 1px, transparent 1px)',
        'glow-gradient': 'radial-gradient(circle, rgba(166, 111, 240, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(166, 111, 240, 0.2), 0 0 20px rgba(166, 111, 240, 0.1)',
        'glow': '0 0 30px rgba(166, 111, 240, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
