const breakpoints = {
  lg: '1024px',
  md: '768px',
  sm: '640px',
  xl: '1280px',
  xxl: '1536px',
};

type MediaString = string;

export type BreakpointsValues = keyof typeof breakpoints;

const BaseTheme = {
  breakpoints,
  colors: {
    primary: '#45a9da',
    white: '#fff',
  },
  durations: {
    ms1000: 1000,
  },
  media: (
    Object.entries(breakpoints) as [keyof typeof breakpoints, string][]
  ).reduce((acc, [key, value]) => {
    acc[key] = `(min-width: ${value})`;
    return acc;
  }, {} as { [value in keyof typeof breakpoints]: MediaString }),
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
