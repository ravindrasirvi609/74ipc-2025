/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pharmaceutical: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbd9c1',
          300: '#f8c096',
          400: '#f4a069',
          500: '#e1681f',
          600: '#cc5a1a',
          700: '#a64a15',
          800: '#803a10',
          900: '#5a2b0b',
        },
        primary: {
          50: '#f0f9f4',
          100: '#dcf4e3',
          200: '#b8e8c7',
          300: '#8dd9a5',
          400: '#5bc47d',
          500: '#17840e',
          600: '#15770d',
          700: '#12650b',
          800: '#0f5409',
          900: '#0c4307',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#061b48',
          600: '#051841',
          700: '#041436',
          800: '#03102b',
          900: '#020c20',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
