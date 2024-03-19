import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CitiesListView, CityDetailsView, SettingsView } from '../views';
import {
  CitiesListTabBarIcon,
  CitiesListTabBarLabel,
  SettingsTabBarIcon,
  SettingsTabBarLabel,
} from '../views/settings/partials';
import { MainStackParamsList, TabsParamsList } from './route.types';
import { NavigatorNames, RouteNames } from './route-names';

const MainStack = createNativeStackNavigator<MainStackParamsList>();
const Tabs = createBottomTabNavigator<TabsParamsList>();

const TabsNavigator = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false }}>
    <Tabs.Screen
      name={RouteNames.CitiesList}
      component={CitiesListView}
      options={{
        tabBarLabel: CitiesListTabBarLabel,
        tabBarIcon: CitiesListTabBarIcon,
      }}
    />
    <Tabs.Screen
      name={RouteNames.Settings}
      component={SettingsView}
      options={{
        tabBarLabel: SettingsTabBarLabel,
        tabBarIcon: SettingsTabBarIcon,
      }}
    />
  </Tabs.Navigator>
);

const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <MainStack.Screen
      options={{ headerTitle: 'Cities List' }}
      name={NavigatorNames.CitiesTabs}
      component={TabsNavigator}
    />
    <MainStack.Screen
      name={RouteNames.CityDetails}
      component={CityDetailsView}
    />
  </MainStack.Navigator>
);

export const Routes = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
