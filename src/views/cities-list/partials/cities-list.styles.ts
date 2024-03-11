import { StyleSheet, ViewStyle } from 'react-native';

import { ExtendedAppTheme } from '../../../theme/default-theme/theme.types';

const emptyListContainer: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

export const getStyles = (theme: ExtendedAppTheme) =>
  StyleSheet.create({
    emptyListContainer,
    list: {
      width: '100%',
    },
    listContentContainer: {
      paddingVertical: theme.spacing.XS,
    },
    listItemContainer: {
      width: '100%',
      paddingVertical: theme.spacing.XS,
      paddingHorizontal: theme.spacing.SM,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    listItemNameContainer: {
      justifyContent: 'center',
    },
    listItemDescription: {
      color: theme.colors.outline,
    },
    listItemDataContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.SM,
    },
  });
