import { ReactElement } from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

import { styles } from './weather-data-section.styles';

type Props = {
  label: string;
  Icon?: ReactElement;
};

export const WeatherDataSection = ({ label, Icon }: Props) => {
  return (
    <>
      <View style={styles.dataContainer}>
        {Icon && <View style={styles.iconContainer}>{Icon}</View>}
        <Text style={styles.label} variant="bodyLarge">
          {label}
        </Text>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};
