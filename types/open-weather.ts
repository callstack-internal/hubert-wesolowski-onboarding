import { z } from 'zod';

import { WeatherGroupScheme } from '../src/queries/weather/cities-list/weather-group-scheme';

export type OWCoord = {
  lon: number;
  lat: number;
};

export type OWSys = {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export enum TemperatureUnits {
  STANDARD = 'standard',
  IMPERIAL = 'imperial',
  METRIC = 'metric',
}

export const TemperatureUnitsSymbols = {
  [TemperatureUnits.STANDARD]: '°K',
  [TemperatureUnits.METRIC]: '°C',
  [TemperatureUnits.IMPERIAL]: '°F',
} as const;

export const WindUnitsSymbols = {
  [TemperatureUnits.STANDARD]: 'mi/h',
  [TemperatureUnits.METRIC]: 'km/h',
  [TemperatureUnits.IMPERIAL]: 'mi/h',
} as const;

export type OWWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type OWMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type OWWind = {
  speed: number;
  def: number;
};

export type OWClouds = {
  all: number;
};

export type OWCityWeather = {
  coord: OWCoord;
  sys: OWSys;
  weather: OWWeather[];
  main: OWMain;
  visibility: number;
  wind: OWWind;
  clouds: OWClouds;
  dt: number;
  id: number;
  name: string;
};

export type OWGroupResponse = {
  cnt: number;
  list: OWCityWeather[];
};

export type PartialOWCityWeather = ArrayElement<
  z.infer<typeof WeatherGroupScheme>
>;
