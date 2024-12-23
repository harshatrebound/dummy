/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-plus-jakarta)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary brand color - Sophisticated blue inspired by Apple's SF Symbols
        brand: {
          50: '#F0F6FF',
          100: '#E5F0FF',
          200: '#C2DCFF',
          300: '#89BEFF',
          400: '#4795FF',
          500: '#0071FF', // Primary brand color
          600: '#005FD6',
          700: '#0050B3',
          800: '#003D85',
          900: '#002A5C',
        },
        // Secondary color - Warm, inviting purple for accents
        secondary: {
          50: '#F6F3FF',
          100: '#EDE9FF',
          200: '#DED5FF',
          300: '#C3B4FF',
          400: '#9C85FF',
          500: '#7B5AFF', // Secondary accent
          600: '#5F3DD6',
          700: '#4829B3',
          800: '#351C85',
          900: '#25135C',
        },
        // Success color - Refined green
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        // Neutral grays with slight blue undertone
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Surface colors for layering
        surface: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          150: '#F5F5F5',
          200: '#EFEFEF',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7))',
        'gradient-dark-glass': 'linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7))',
        'gradient-brand': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'button-hover': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
} 