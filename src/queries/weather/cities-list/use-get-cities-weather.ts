import { useQuery } from '@tanstack/react-query';

import {
  OWCityWeather,
  TemperatureUnits,
} from '../../../../types/open-weather';
import { WeatherQueryKeys } from '../../query-keys';
import { getCitiesWeather } from './get-cities-weather.client';

const useGetCitiesWeatherStaleTime = 60 * 1000; // seconds

export const useGetCitiesWeather = <
  ReturnT = Promise<OWCityWeather[] | undefined>,
>(
  ids: number[],
  units = TemperatureUnits.METRIC,
  mapResponse?: (data: OWCityWeather[] | undefined) => ReturnT,
) => {
  return useQuery({
    queryKey: [WeatherQueryKeys.WEATHER_FOR_GROUP, ids, units],
    queryFn: () => getCitiesWeather(ids, units),
    select: mapResponse,
    staleTime: useGetCitiesWeatherStaleTime,
  });
};
