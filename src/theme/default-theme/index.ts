import { DefaultTheme, MD3LightTheme, useTheme } from 'react-native-paper';

import { defaultColors } from './default-colors';
import { spacing } from './spacing';
import { ExtendedAppTheme } from './theme.types';

export const defaultTheme: ExtendedAppTheme = {
  ...MD3LightTheme,
  colors: {
    ...DefaultTheme.colors,
    ...defaultColors,
  },
  spacing,
};

export const useAppTheme = () => useTheme<ExtendedAppTheme>();
