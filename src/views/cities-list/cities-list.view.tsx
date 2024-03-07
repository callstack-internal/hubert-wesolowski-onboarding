import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { CitiesListScreenProps } from '../../routes/route.types';
import { RouteNames } from '../../routes/route-names';

export const CitiesListView = ({ navigation }: CitiesListScreenProps) => {
  const handlePressShowDetails = () => {
    navigation.navigate(RouteNames.CityDetails, { city_id: 123 });
  };

  return (
    <View>
      <Text variant="headlineMedium">Cities List View</Text>
      <Button onPress={handlePressShowDetails}>Navigate to details</Button>
    </View>
  );
};
