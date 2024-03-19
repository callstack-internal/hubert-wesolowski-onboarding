import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from '../../../../routes/partials';

export const SettingsTabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
  focused,
}) => {
  return <TabBarIcon iconName="cog-outline" focused={focused} />;
};
