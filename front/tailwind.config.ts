import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {},
  plugins: [
    nextui({
      themes: {
        'light-purple': {
          extend: 'light', // <- inherit default values from dark theme
          colors: {
            background: '#FFF',
            foreground: '#964EA6',
            primary: {
              50: '#FADFF7',
              100: '#FADFF7',
              200: '#F6C1F3',
              300: '#E29BE4',
              400: '#C179C9',
              500: '#964EA6',
              600: '#78398E',
              700: '#5C2777',
              800: '#431860',
              900: '#300E4F',
              DEFAULT: '#ff9191',
              foreground: '#964EA6',
            },
            secondary: {
              50: '#FAEFF0',
              100: '#FAEFF0',
              200: '#F6E0E4',
              300: '#E6C7CF',
              400: '#CEABB8',
              500: '#AE8799',
              600: '#95627F',
              700: '#7D4469',
              800: '#642B57',
              900: '#53194B',
              DEFAULT: '#a80359',
              foreground: '#AE8799',
            },
            focus: '#F182F6',
          },
          layout: {
            fontSize: {
              tiny: '0.6rem',
              small: '0.8rem',
              medium: '1rem',
              large: '1.2rem',
            },
            spacingUnit: 3,
            disabledOpacity: '0.3',
            radius: {
              small: '1rem',
              medium: '1.5rem',
              large: '2rem',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
export default config;
