import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.spacing.XL,
      alignItems: 'center',
    },
    description: {
      color: theme.colors.outline,
    },
    weatherDataContainer: {
      marginTop: theme.spacing.XXL,
      width: '100%',
      rowGap: theme.spacing.SM,
      paddingVertical: theme.spacing.SM,
    },
    mainDataContainer: {
      paddingHorizontal: theme.spacing.SM,
      alignItems: 'center',
    },
  });
