import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PartialOWCityWeather } from '../../types/open-weather';
import { RouteNames } from './route-names';

export type CityDetailsParams = {
  city: PartialOWCityWeather;
};

export type MainStackParamsList = {
  [RouteNames.CityDetails]: CityDetailsParams;
  [RouteNames.CitiesList]: undefined;
};

export type ScreenProps<T extends RouteNames> = NativeStackScreenProps<
  MainStackParamsList,
  T
>;

export type CitiesListScreenProps = ScreenProps<RouteNames.CitiesList>;

export type CityDetailsScreenProps = ScreenProps<RouteNames.CityDetails>;
