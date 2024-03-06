import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CitiesListView, CityDetailsView } from '../views';
import { MainStackParamsList } from './route.types';
import { RouteNames } from './route-names';

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={RouteNames.CitiesList}
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <MainStack.Screen
          options={{
            title: 'Cities list',
          }}
          name={RouteNames.CitiesList}
          component={CitiesListView}
        />
        <MainStack.Screen
          options={{
            title: 'City details',
          }}
          name={RouteNames.CityDetails}
          component={CityDetailsView}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
