import { PropsWithChildren } from 'react';
import { Text } from 'react-native-paper';

import { useAppTheme } from '../../../theme';
import { getStyles } from './tab-bar-label.styles';

type Props = {
  focused?: boolean;
};

export const TabBarLabel = ({
  focused,
  children,
}: PropsWithChildren<Props>) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Text
      variant="bodySmall"
      style={focused ? styles.labelFocused : styles.label}
    >
      {children}
    </Text>
  );
};
