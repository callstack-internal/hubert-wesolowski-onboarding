import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { ErrorMessageProps } from '../status-container.types';
import { styles } from './loading.styles';

const defaultMessage = 'Something went wrong';
const defaultRefetchLabel = 'Refetch';

export const ErrorMessage = ({
  message = defaultMessage,
  refetchLabel = defaultRefetchLabel,
  onRefetch,
}: ErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">{message}</Text>
      {onRefetch && <Button onPress={onRefetch}>{refetchLabel}</Button>}
    </View>
  );
};
