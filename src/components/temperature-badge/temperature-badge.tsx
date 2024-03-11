import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { TemperatureUnits } from '../../../types/open-weather';
import { useGetFormattedTemperature } from '../../hooks/city-weather';
import { useAppTheme } from '../../theme';
import { getStyles } from './temperature-badge.styles';

type Props = {
  temperature: number;
  units?: TemperatureUnits;
};

export const TemperatureBadge = ({ temperature }: Props) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const { temperatureWithUnits } = useGetFormattedTemperature(temperature);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{temperatureWithUnits}</Text>
    </View>
  );
};
