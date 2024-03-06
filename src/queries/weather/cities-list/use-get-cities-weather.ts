import { useQuery } from '@tanstack/react-query';

import { WeatherQueryKeys } from '../../query-keys';
import { getCitiesWeather } from './get-cities-weather.client';

export const useGetCitiesWeather = (ids: number[]) => {
  return useQuery({
    queryKey: [WeatherQueryKeys.WEATHER_FOR_GROUP, ids],
    queryFn: () => getCitiesWeather(ids),
  });
};
