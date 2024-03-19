import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.spacing.XS,
      paddingHorizontal: theme.spacing.SM,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.surface,
    },
  });
