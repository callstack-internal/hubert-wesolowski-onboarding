import { StyleSheet, ViewStyle } from 'react-native';
import { MD3Colors } from 'react-native-paper';

const emptyListContainer: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconSize = 50;

export const styles = StyleSheet.create({
  emptyListContainer,
  list: {
    width: '100%',
  },
  listContentContainer: {
    paddingVertical: 10,
  },
  listItemContainer: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemNameContainer: {
    justifyContent: 'center',
  },
  listItemDescription: {
    color: MD3Colors.neutral40,
  },
  listItemIcon: {
    width: iconSize,
    height: iconSize,
  },
  listItemDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
