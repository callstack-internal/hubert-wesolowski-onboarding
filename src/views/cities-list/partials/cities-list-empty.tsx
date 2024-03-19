import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { useAppTheme } from '../../../theme';
import { getStyles } from './cities-list.styles';

export const CitiesListEmpty = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.emptyListContainer}>
      <Text variant="bodyLarge">Currently there is no weather data</Text>
    </View>
  );
};
