import { StyleSheet } from 'react-native';

import { ExtendedAppTheme } from '../../theme/default-theme/theme.types';

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    dataContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      columnGap: theme.spacing.XL,
    },
    iconContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    label: {
      flex: 1,
      justifyContent: 'center',
    },
    divider: {
      width: '100%',
    },
  });
