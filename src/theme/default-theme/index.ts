import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { defaultColors } from './default-colors.ts';

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...defaultColors,
  },
};
