import { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { CityDetailsScreenProps } from '../../routes/route.types';

export const CityDetailsView = ({
  route,
  navigation,
}: CityDetailsScreenProps) => {
  const { params } = route;

  useEffect(() => {
    navigation.setOptions({ title: `City: ${params.city_id}` });
  }, [navigation, params.city_id]);

  return (
    <View>
      <Text variant="headlineMedium">City Details</Text>
      <Text variant="bodyMedium">City id: {params.city_id}</Text>
    </View>
  );
};
