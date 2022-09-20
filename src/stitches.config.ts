import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

const config =
  createStitches({
    theme: {
      colors: {
        primary: '#26DED0',
        secondary: '#08282D',
        tertiary: '#495057',
        'text-primary': '#FFFFFF',
        'text-secondary': '#D4D5D5',
        'text-stroke': '#777E90',
        'text-reverse': '#141416',
        'bg-primary': '#141416',
        'bg-secondary': '#141416',
        'bg-tertiary': '#1C1C1C',
        'bg-filter': '#23262F',
        'bg-stroke': '#B1B5C3',
        'bg-reverse': '#141518',
        'full-black': '#000000',
        'alert-success': '#3DDC97',
        'alert-warning': '#EF6351',
        'alert-error': '#BF211E',
        'alert-info': '#B7BEC2',
      },
      fonts: {
        regular: 'Inter, sans-serif',
      },
      fontSizes: {
        'text-s': '12px',
        'text-m': '14px',
        'text-l': '16px',
        'heading-s': '20px',
        'heading-m': '28px',
        'heading-l': '36px',
        'heading-xl': '42px',
      },
      lineHeights: {
        'text-s': '16px',
        'text-m': '20px',
        'text-l': '24px',
        'heading-s': '28px',
        'heading-m': '36px',
        'heading-l': '44px',
        'heading-xl': '54px',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '12px',
        4: '20px',
        round: '9999px',
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        bold: '700'
      },
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });

export const { styled, createTheme, globalCss, getCssText, theme, css, keyframes } = config

export const darkTheme = createTheme("dark", {
  colors: {
    primary: '#FF495C',
    secondary: '#141518',
    tertiary: '#D2DADE',
    'text-primary': '#FFFFFF',
    'text-secondary': '#D2DADE',
    'text-reverse': '#141518',
    'bg-primary': '#141518',
    'bg-secondary': '#FDFDFD',
    'bg-reverse': '#FFFFFF',
  },
});

export type CSS = Stitches.CSS<typeof config>;


globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap')",
  ],
  body: {
    color: "$text-primary",
    backgroundColor: "$bg-primary",
  }
})();
