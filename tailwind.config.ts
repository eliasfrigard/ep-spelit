import type { Config } from "tailwindcss"
import withMT from '@material-tailwind/react/utils/withMT'

/**
 * Color palette:
 * #F2F2F2
 * #8F9FA6
 * #D2D6D9
 * #556773
 * #283740
 * + red and black
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1760px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: '#F2F2F2',
        accent: {
          500: '#F23A29'
        },
        primary: {
          300: '#D9D9D9',
          400: '#8C8C8C',
          500: '#595959',
          600: '#262626',
          700: '#0D0D0D',
        },
        secondary: {
          500: '#F2F2F2'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default withMT(config)

