import { PartialOWCityWeather } from '../../../types/open-weather';
import { useGetFormattedHumidity } from './use-get-formatted-humidity';
import { useGetFormattedPressure } from './use-get-formatted-pressure';
import { useGetFormattedTemperature } from './use-get-formatted-temperature';
import { useGetFormattedWind } from './use-get-formatted-wind';

export const useGetFormattedBaseWeatherData = (
  baseWeatherData: PartialOWCityWeather,
) => {
  const humidityData = useGetFormattedHumidity(baseWeatherData.main.humidity);
  const pressureData = useGetFormattedPressure(baseWeatherData.main.pressure);
  const temperatureData = useGetFormattedTemperature(baseWeatherData.main.temp);
  const windData = useGetFormattedWind(
    baseWeatherData.wind.speed,
    baseWeatherData.wind.deg,
  );

  return {
    ...humidityData,
    ...pressureData,
    ...temperatureData,
    ...windData,
  };
};
