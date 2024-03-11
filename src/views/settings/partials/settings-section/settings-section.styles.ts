import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.SM,
    },
    title: {
      marginBottom: theme.spacing.XS,
    },
  });
