import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PartialOWCityWeather } from '../../types/open-weather';
import { NavigatorNames, RouteNames } from './route-names';

export type CityDetailsParams = {
  city: PartialOWCityWeather;
};

export type TabsParamsList = {
  [RouteNames.CitiesList]: CityDetailsParams;
  [RouteNames.Settings]: undefined;
};

export type MainStackParamsList = {
  [NavigatorNames.CitiesTabs]: NavigatorScreenParams<TabsParamsList>;
  [RouteNames.CityDetails]: CityDetailsParams;
};

export type ScreenProps<T extends keyof MainStackParamsList> =
  NativeStackScreenProps<MainStackParamsList, T>;

export type BottomTabsScreenProps<T extends keyof TabsParamsList> =
  BottomTabScreenProps<TabsParamsList, T>;

export type CitiesListScreenProps = CompositeScreenProps<
  BottomTabsScreenProps<RouteNames.CitiesList>,
  ScreenProps<NavigatorNames.CitiesTabs>
>;

export type SettingsScreenProps = CompositeScreenProps<
  BottomTabsScreenProps<RouteNames.Settings>,
  ScreenProps<NavigatorNames.CitiesTabs>
>;

export type CityDetailsScreenProps = ScreenProps<RouteNames.CityDetails>;
