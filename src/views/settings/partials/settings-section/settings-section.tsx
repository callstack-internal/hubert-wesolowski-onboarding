import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { useAppTheme } from '../../../../theme';
import { getStyles } from './settings-section.styles';

type Props = {
  title?: string;
};

export const SettingsSection = ({
  title,
  children,
}: PropsWithChildren<Props>) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {title && (
        <Text style={styles.title} variant="titleMedium">
          {title}
        </Text>
      )}
      {children}
    </View>
  );
};
