import { useContext } from 'react';
import { View } from 'react-native';

import { PartialOWCityWeather } from '../../../types/open-weather';
import { StatusContainer, TemperatureUnitsToolbar } from '../../components';
import { cityIds } from '../../constants';
import { TemperatureUnitsContext } from '../../contexts/temperature-units-context';
import { useGetCitiesWeather } from '../../queries/weather/cities-list/use-get-cities-weather';
import { WeatherGroupScheme } from '../../queries/weather/cities-list/weather-group-scheme';
import { CitiesListScreenProps } from '../../routes/route.types';
import { RouteNames } from '../../routes/route-names';
import { styles } from './cities-list.view.styles';
import { CitiesList } from './partials/cities-list';

export const CitiesListView = ({ navigation }: CitiesListScreenProps) => {
  const { units } = useContext(TemperatureUnitsContext);
  const {
    data = [],
    isError,
    isFetching,
    refetch,
  } = useGetCitiesWeather(cityIds, units);
  const parsedData = WeatherGroupScheme.parse(data);
  const handlePressShowDetails = (city: PartialOWCityWeather) => {
    navigation.navigate(RouteNames.CityDetails, { city });
  };

  const handleRefetch = () => {
    refetch();
  };

  return (
    <View style={styles.listWrapper}>
      <TemperatureUnitsToolbar />
      <StatusContainer
        isError={isError}
        isLoading={isFetching}
        onRefetch={handleRefetch}
      >
        <CitiesList cities={parsedData} onItemPress={handlePressShowDetails} />
      </StatusContainer>
    </View>
  );
};
