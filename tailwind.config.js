/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-base)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-base)',
        },
        accent: {
          DEFAULT: 'var(--accent-base)',
        },
        third: {
          DEFAULT: 'var(--third-base)',
        },
        text: {
          DEFAULT: 'var(--primary-base)',
        },
        bg: {
          DEFAULT: 'var(--background-base)',
          primary: 'var(--primary-base)',
        },
        border: {
          DEFAULT: 'var(--primary-base)',
        },
      },
      fontSize: {
        'base': 'var(--font-size-base)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xlg)',
      },
      backgroundColor: {
        'base': 'var(--background-base)',
        'primary': 'var(--primary-base)',
        'secondary': 'var(--background-sec)',
        'third': 'var(--background-third)',
      },
      borderRadius: {
        'base': 'var(--border-radius-base)',
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '820px',
        lg: '1000px',
        xl: '1240px',
        '2xl': '1500px',
      },
    },
  },
}
