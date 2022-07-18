import { createStitches } from "@stitches/react";

export const { styled, createTheme, globalCss, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        primary: '#FF495C',
        secondary: '#141518',
        tertiary: '#D2DADE',
        'text-primary': '#141518',
        'text-secondary': '#D2DADE',
        'text-reverse': '#FFFFFF',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#FDFDFD',
        'bg-reverse': '#141518',
      },
      fonts: {
        sans: 'Inter, sans-serif',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
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
        1: '2px',
        2: '4px',
        3: '8px',
        round: '9999px',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });

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

globalCss({
  body: {
    color: "$text-primary",
    backgroundColor: "$bg-primary",
  }
})();
