import { useContext } from 'react';

import { PartialOWCityWeather } from '../../../types/open-weather';
import { StatusContainer } from '../../components';
import { cityIds } from '../../constants';
import { UnitsContext } from '../../contexts/units-context';
import { useGetCitiesWeather } from '../../queries/weather/cities-list/use-get-cities-weather';
import { WeatherGroupScheme } from '../../queries/weather/cities-list/weather-group-scheme';
import { CitiesListScreenProps, RouteNames } from '../../routes';
import { CitiesList } from './partials/cities-list';

export const CitiesListView = ({ navigation }: CitiesListScreenProps) => {
  const { units } = useContext(UnitsContext);
  const {
    data = [],
    isError,
    isFetching,
    refetch,
  } = useGetCitiesWeather<PartialOWCityWeather[]>(
    cityIds,
    units,
    WeatherGroupScheme.parse,
  );
  const handlePressShowDetails = (city: PartialOWCityWeather) => {
    navigation.navigate(RouteNames.CityDetails, { city });
  };

  const handleRefetch = () => {
    refetch();
  };

  return (
    <StatusContainer
      isError={isError}
      isLoading={isFetching}
      onRefetch={handleRefetch}
    >
      <CitiesList cities={data} onItemPress={handlePressShowDetails} />
    </StatusContainer>
  );
};
