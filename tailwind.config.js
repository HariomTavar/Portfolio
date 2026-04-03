/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium Dark UI
        baseBg: '#0A0F1C',
        sectionBg: '#111827',
        cardBg: '#111827',
        borderColor: 'rgba(255,255,255,0.1)',
        primary: '#FACC15',
        primaryHover: '#EAB308',
        secondary: '#3B82F6',
        smart: '#FACC15',
        highlight: '#FACC15',
        textPrimary: '#E5E7EB',
        textSecondary: '#9CA3AF',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 60px rgba(250, 204, 21, 0.18)',
        card: '0 8px 30px rgba(2, 6, 23, 0.4)',
      },
      backgroundImage: {
        primary: 'linear-gradient(135deg, #2563EB, #7C3AED)',
      },
    },
  },
  plugins: [],
}

