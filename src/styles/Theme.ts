interface Colors {
  primary: string;
  secondary: string;
  third: string;
  white: string;
  gray: string;
  black: string;
  lightGray: string;
  darkGray: string;
}

type MediaQuery = {
  mobile: string;
};

type Theme = {
  colors: Colors;
  mediaQuery: MediaQuery;
};

const colors: Colors = {
  primary: '#263140',
  secondary: '#d97652',
  third: '#f2e9d8',
  white: '#ffffff',
  gray: '#c9c9c9b8',
  black: '#000000',
  lightGray: '#7a7a7a',
  darkGray: '#575757',
};

const mediaQuery: MediaQuery = {
  mobile: 'screen and (min-width: 375px) and (max-width: 1000px)',
};

const theme: Theme = { colors, mediaQuery };

export default theme;
