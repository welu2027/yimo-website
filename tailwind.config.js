module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {

    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.slate.900'),

            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },

            h1: {
              color: theme('colors.slate.900'),
            },
            h2: {
              color: theme('colors.slate.800'),
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.slate.100'),

            a: {
              color: theme('colors.blue.300'),
              '&:hover': {
                color: theme('colors.blue.200'),
              },
            },
            h1: {
              color: theme('colors.slate.100'),
            },
            h2: {
              color: theme('colors.slate.100'),
            },
            h3: {
              color: theme('colors.slate.100'),
            },
            h4: {
              color: theme('colors.slate.100'),
            },
            h5: {
              color: theme('colors.slate.100'),
            },
            h6: {
              color: theme('colors.slate.100'),
            },

            strong: {
              color: theme('colors.slate.100'),
            },

            code: {
              color: theme('colors.slate.100'),
            },
            th: {
              color: theme('colors.slate.100'),
            },
            figcaption: {
              color: theme('colors.slate.100'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    extend: {
      display: ["dark"]
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
