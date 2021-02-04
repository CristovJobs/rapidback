import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `"Baloo 2', cursive"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },

};

export default theme;