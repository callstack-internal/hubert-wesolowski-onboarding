import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: 20,
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
