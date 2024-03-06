import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { styles } from './loading.styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};
