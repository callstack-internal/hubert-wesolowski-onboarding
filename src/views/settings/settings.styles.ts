import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.SM,
    },
  });
