import { PartialOWCityWeather, TempUnit } from '../../../types/open-weather';
import { StatusContainer } from '../../components';
import { cityIds } from '../../constants';
import { useGetCitiesWeather } from '../../queries/weather/cities-list/use-get-cities-weather';
import { WeatherGroupScheme } from '../../queries/weather/cities-list/weather-group-scheme';
import { CitiesListScreenProps } from '../../routes/route.types';
import { RouteNames } from '../../routes/route-names';
import { CitiesList } from './partials/cities-list';

export const CitiesListView = ({ navigation }: CitiesListScreenProps) => {
  const {
    data = [],
    isError,
    isFetching,
    refetch,
  } = useGetCitiesWeather(cityIds, TempUnit.METRIC);
  const parsedData = WeatherGroupScheme.parse(data);
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
      <CitiesList cities={parsedData} onItemPress={handlePressShowDetails} />
    </StatusContainer>
  );
};
