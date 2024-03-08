import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './cities-list.styles';

export const CitiesListEmpty = () => {
  return (
    <View style={styles.emptyListContainer}>
      <Text variant="bodyLarge">Currently there is no weather data</Text>
    </View>
  );
};
