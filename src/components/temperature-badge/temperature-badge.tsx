import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { TemperatureUnits } from '../../../types/open-weather';
import { useGetFormattedTemperature } from '../../hooks/city-weather';
import { styles } from './temperature.styles';

type Props = {
  temperature: number;
  units?: TemperatureUnits;
};

export const TemperatureBadge = ({ temperature }: Props) => {
  const { temperatureWithUnits } = useGetFormattedTemperature(temperature);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{temperatureWithUnits}</Text>
    </View>
  );
};
