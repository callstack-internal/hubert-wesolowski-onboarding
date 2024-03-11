import { PropsWithChildren } from 'react';
import { Text } from 'react-native-paper';

import { styles } from './tab-bar-label.styles';

type Props = {
  focused?: boolean;
};

export const TabBarLabel = ({
  focused,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Text
      variant="bodySmall"
      style={focused ? styles.labelFocused : styles.label}
    >
      {children}
    </Text>
  );
};
