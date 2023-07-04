const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px',
      },
      fontFamily: {
        'primary': ['var(--ff-primary)']
      },
      colors: {
        text: {
          DEFAULT: 'hsl(var(--marine-blue) / <alpha-value>)',
          'active-number': 'hsl(var(--purplish-blue) / <alpha-value>)',
          'number': 'hsl(var(--cool-gray) / <alpha-value>)',
        },
        accent: {
          'active': 'hsl(var(--pastel-blue) / <alpha-value>)',
          'circle-btn': 'hsl(var(--light-blue) / <alpha-value>)',
          'checkbox': 'hsl(var(--purplish-blue) / <alpha-value>)',
        },
        fill: {
          'btn': 'hsl(var(--marine-blue) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--light-gray) / <alpha-value>)',
          'active': 'hsl(var(--purplish-blue) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'hsl(var(--strawberry-red) / <alpha-value>)',
        },
        background: {
          'screen': 'hsl(var(--magnolia) / <alpha-value>)',
          'body': 'hsl(var(--alabaster) / <alpha-value>)',
        },
      },
      letterSpacing: {
        'subhead': 'var(--tracking-subhead)'
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply w-fit text-base font-medium text-white grid place-items-center py-4 px-6 rounded-xl bg-fill-btn hover:brightness-125': {}
        }
      })
    }),
    require('@tailwindcss/forms'),
  ],
}
