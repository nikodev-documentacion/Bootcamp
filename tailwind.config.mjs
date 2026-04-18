/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        react: {
          DEFAULT: '#61dafb',
          dim: '#4fa8c7',
        },
        bg: {
          DEFAULT: '#0a0e13',
          2: '#0f1419',
          3: '#151b23',
        },
        panel: '#1a2129',
        border: '#2a3340',
        accent: '#ffb86c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
