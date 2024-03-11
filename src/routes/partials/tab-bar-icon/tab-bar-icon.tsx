import { Icon } from 'react-native-paper';

import { useAppTheme } from '../../../theme';

type Props = {
  focused?: boolean;
  iconName: string;
};

export const TabBarIcon = ({ focused, iconName }: Props) => {
  const theme = useAppTheme();

  return (
    <Icon
      source={iconName}
      size={20}
      color={focused ? theme.colors.primary : theme.colors.primaryContainer}
    />
  );
};
