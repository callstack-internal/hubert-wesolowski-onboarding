import { View } from 'react-native';
import { Text } from 'react-native-paper';

import {
  TemperatureUnits,
  TemperatureUnitsSymbols,
} from '../../../types/open-weather';
import { styles } from './temperature.styles';

type Props = {
  temperature: number;
  units?: TemperatureUnits;
};

export const TemperatureBadge = ({
  temperature,
  units = TemperatureUnits.STANDARD,
}: Props) => {
  const unitSymbol = TemperatureUnitsSymbols[units];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Math.round(temperature)} {unitSymbol}
      </Text>
    </View>
  );
};
