import { Icon, MD3Colors } from 'react-native-paper';

type Props = {
  focused?: boolean;
  iconName: string;
};

export const TabBarIcon = ({ focused, iconName }: Props) => {
  return (
    <Icon
      source={iconName}
      size={20}
      color={focused ? MD3Colors.tertiary70 : MD3Colors.tertiary90}
    />
  );
};
