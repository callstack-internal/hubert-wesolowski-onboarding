import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RouteNames } from './route-names';

export type CityDetailsParams = {
  city_id: number;
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
