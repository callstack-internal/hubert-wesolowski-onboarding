import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    label: {
      fontWeight: 'normal',
      color: theme.colors.primaryContainer,
    },
    labelFocused: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });
