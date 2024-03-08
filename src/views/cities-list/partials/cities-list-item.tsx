import { OPEN_WEATHER_BASE_ICON_URL } from '@env';
import { useCallback, useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { PartialOWCityWeather } from '../../../../types/open-weather';
import { TemperatureBadge } from '../../../components';
import { TemperatureUnitsContext } from '../../../contexts/temperature-units-context';
import { styles } from './cities-list.styles';

type Props = {
  item: PartialOWCityWeather;
  onPress: (city: PartialOWCityWeather) => void;
};

export const CitiesListItem = ({ item, onPress }: Props) => {
  const { units } = useContext(TemperatureUnitsContext);
  const iconUrl = item.weather[0].icon
    ? `${OPEN_WEATHER_BASE_ICON_URL}${item.weather[0].icon}.png`
    : null;
  const { temp } = item.main;

  const handlePressItem = useCallback(() => {
    if (onPress) {
      onPress(item);
    }
  }, [item, onPress]);

  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={handlePressItem}
    >
      <View style={styles.listItemNameContainer}>
        <Text variant="titleLarge">{item.name}</Text>
        <Text style={styles.listItemDescription} variant="bodyMedium">
          {item.weather[0].description}
        </Text>
      </View>
      <View style={styles.listItemDataContainer}>
        <TemperatureBadge temperature={temp} units={units} />
        {iconUrl && (
          <Image style={styles.listItemIcon} source={{ uri: iconUrl }} />
        )}
      </View>
    </TouchableOpacity>
  );
};
