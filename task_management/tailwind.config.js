/** @type {import('tailwindcss').Config} */
export default {
  enabled: process.env.NODE_ENV === 'production',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontfamily: {
        tnr: ['Times New Roman', 'serif'],
      },
      fontSize: {
        sm_t: '18px',
        md_t: '28px',
        lg_t: '38px',
      },
      spacing: {
        sm_s: '10px',
        md_s: '20px',
        lg_s: '30px',
      },
    },
  },
  plugins: [],
}
