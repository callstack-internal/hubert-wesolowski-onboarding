import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  description: {
    color: MD3Colors.neutral40,
  },
  weatherDataContainer: {
    marginTop: 30,
    width: '100%',
    rowGap: 10,
    paddingVertical: 10,
  },
  mainDataContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
