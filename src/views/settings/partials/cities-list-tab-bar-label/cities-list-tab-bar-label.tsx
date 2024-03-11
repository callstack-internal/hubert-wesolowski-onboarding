import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TabBarLabel } from '../../../../routes/partials';

export const CitiesListTabBarLabel: BottomTabNavigationOptions['tabBarLabel'] =
  ({ focused }) => {
    return <TabBarLabel focused={focused}>List</TabBarLabel>;
  };
