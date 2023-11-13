/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#8172F4',
        'title-color': '#454165',
        'subtitle-color':'#3D3948',
        'detail-color':'#727070',
        'form-color':'#F0EEFE',
      },
    },
  },
  plugins: [],
}

