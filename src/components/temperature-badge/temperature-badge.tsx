import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { TempUnit } from '../../../types/open-weather';
import { styles } from './temperature.styles';

type Props = {
  temperature: number;
  unit?: TempUnit;
};

export const TemperatureBadge = ({
  temperature,
  unit = TempUnit.STANDARD,
}: Props) => {
  const unitSymbol = unit === TempUnit.METRIC ? '°C' : 'K';

  return (
    <View style={styles.container}>
      <Text>
        {Math.round(temperature)} {unitSymbol}
      </Text>
    </View>
  );
};
