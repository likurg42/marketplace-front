const BaseTheme = {
  colors: {
    primary: '#45a9da',
    white: '#fff',
  },
  durations: {
    ms1000: 1000,
  },
  order: {
    level1: 1,
    level2: 10,
    level3: 100,
    level4: 1000,
    level5: 10000,
  },
  sizes: {
    footerHeight: '3.75rem',
    headerHeight: '1.625rem',
  },
};

export type Theme = typeof BaseTheme;

export default BaseTheme;
