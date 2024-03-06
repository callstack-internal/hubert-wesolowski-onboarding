import { useQuery } from '@tanstack/react-query';

import { TemperatureUnits } from '../../../../types/open-weather';
import { WeatherQueryKeys } from '../../query-keys';
import { getCitiesWeather } from './get-cities-weather.client';

const useGetCitiesWeatherStaleTime = 60 * 1000; // seconds

export const useGetCitiesWeather = (
  ids: number[],
  units = TemperatureUnits.METRIC,
) => {
  return useQuery({
    queryKey: [WeatherQueryKeys.WEATHER_FOR_GROUP, ids, units],
    queryFn: () => getCitiesWeather(ids, units),
    staleTime: useGetCitiesWeatherStaleTime,
  });
};
