module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './public/index.html',],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  }