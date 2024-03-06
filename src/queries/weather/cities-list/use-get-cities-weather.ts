import { useQuery } from '@tanstack/react-query';

import { TempUnit } from '../../../../types/open-weather';
import { WeatherQueryKeys } from '../../query-keys';
import { getCitiesWeather } from './get-cities-weather.client';

export const useGetCitiesWeather = (ids: number[], units = TempUnit.METRIC) => {
  return useQuery({
    queryKey: [WeatherQueryKeys.WEATHER_FOR_GROUP, ids, units],
    queryFn: () => getCitiesWeather(ids, units),
  });
};
