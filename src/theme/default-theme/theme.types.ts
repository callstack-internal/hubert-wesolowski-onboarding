import type { MD3Theme } from 'react-native-paper';

export enum Spacing {
  XXS = 'XXS',
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
}

export type ThemeSpacing = {
  [key in Spacing]: number;
};

export type ExtendedAppTheme = MD3Theme & {
  spacing: ThemeSpacing;
};
