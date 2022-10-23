/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    colors: {
      black: '#000000',
      white: {
        1: '#f5f5f5'
      },
      gray: {
        1: '#E6E7F1'
      },
      blue: {
        1: '#0071c2'
      }
    },
    spacing: {
      0: '0px',
      8: '8px'
    },
    fontSize: {
      14: '14px',
      16: '16px'
    },
    screens: {
      mobile: { max: '820px' },
      desktop: { min: '821px' }
    }
  }
}
