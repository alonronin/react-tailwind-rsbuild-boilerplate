const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/**.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      typography: (theme) => ({
        gray: {
          css: {
            color: theme('colors.gray.800'),
            h2: {
              color: theme('colors.gray.600'),
            },
            a: {
              color: theme('colors.gray.600'),
              fontWeight: 'bold',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus', 'active'],
      borderColor: ['group-focus'],
      boxShadow: ['group-focus'],
      opacity: ['group-focus'],
      textColor: ['group-focus', 'active'],
      textDecoration: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
