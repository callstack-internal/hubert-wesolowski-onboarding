import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { cityIds } from '../../constants';
import { useGetCitiesWeather } from '../../queries/weather/cities-list/use-get-cities-weather';
import { CitiesListScreenProps } from '../../routes/route.types';
import { RouteNames } from '../../routes/route-names';

export const CitiesListView = ({ navigation }: CitiesListScreenProps) => {
  const { data } = useGetCitiesWeather(cityIds);
  const handlePressShowDetails = () => {
    navigation.navigate(RouteNames.CityDetails, { city_id: 123 });
  };

  console.log(JSON.stringify(data, null, 2));

  return (
    <View>
      <Text variant="headlineMedium">Cities List View</Text>
      <Button onPress={handlePressShowDetails}>Navigate to details</Button>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text variant="bodyLarge">{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
