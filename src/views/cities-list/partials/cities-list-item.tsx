import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { PartialOWCityWeather } from '../../../../types/open-weather';
import { TemperatureBadge } from '../../../components';
import { OpenWeatherIcon } from '../../../components/open-weather-icon';
import { styles } from './cities-list.styles';

type Props = {
  item: PartialOWCityWeather;
  onPress: (city: PartialOWCityWeather) => void;
};

export const CitiesListItem = ({ item, onPress }: Props) => {
  const iconName = item.weather[0].icon;
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
        <TemperatureBadge temperature={temp} />
        <OpenWeatherIcon icon={iconName} />
      </View>
    </TouchableOpacity>
  );
};
