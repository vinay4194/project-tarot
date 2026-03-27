import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0A0E27',
          midnight: '#151B3D',
          gold: '#D4A574',
          purple: '#9D84B7',
          glow: '#B8A9C9',
          slate: '#1E293B',
          cream: '#F8F6F3',
          accent: '#C9A961',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(180deg, #0A0E27 0%, #151B3D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A574 0%, #C9A961 100%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(157, 132, 183, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'flip': 'flip 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'cosmic': '0 0 40px rgba(139, 92, 246, 0.3)',
        'gold': '0 0 30px rgba(230, 192, 104, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
