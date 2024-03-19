import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from '../../../../routes/partials';

export const CitiesListTabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
  focused,
}) => {
  return <TabBarIcon iconName="view-list" focused={focused} />;
};
