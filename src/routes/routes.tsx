import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, MD3Colors, Text } from 'react-native-paper';

import { CitiesListView, CityDetailsView, SettingsView } from '../views';
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
        tabBarLabel: ({ focused }) => (
          <Text
            variant="bodySmall"
            style={{
              fontWeight: focused ? 'bold' : 'normal',
              color: focused ? MD3Colors.tertiary70 : MD3Colors.tertiary80,
            }}
          >
            List
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            source="view-list"
            size={20}
            color={focused ? MD3Colors.tertiary70 : MD3Colors.tertiary80}
          />
        ),
      }}
    />
    <Tabs.Screen
      name={RouteNames.Settings}
      component={SettingsView}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text
            variant="bodySmall"
            style={{
              fontWeight: focused ? 'bold' : 'normal',
              color: focused ? MD3Colors.tertiary70 : MD3Colors.tertiary80,
            }}
          >
            Settings
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            source="cog-outline"
            size={20}
            color={focused ? MD3Colors.tertiary70 : MD3Colors.tertiary80}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <MainStack.Screen
      name={NavigatorNames.CitiesTabs}
      component={TabsNavigator}
    />
    <MainStack.Screen
      options={{
        title: 'City details',
      }}
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
