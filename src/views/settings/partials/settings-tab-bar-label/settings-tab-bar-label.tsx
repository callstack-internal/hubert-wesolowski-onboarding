import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TabBarLabel } from '../../../../routes/partials';

export const SettingsTabBarLabel: BottomTabNavigationOptions['tabBarLabel'] = ({
  focused,
}) => {
  return <TabBarLabel focused={focused}>Settings</TabBarLabel>;
};
