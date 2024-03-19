import { useLayoutEffect } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { Icon, Text } from 'react-native-paper';

import { OpenWeatherIcon } from '../../components/open-weather-icon';
import { WeatherDataSection } from '../../components/weather-data-section/weather-data-section';
import { useGetFormattedBaseWeatherData } from '../../hooks/city-weather';
import { CityDetailsScreenProps } from '../../routes';
import { useAppTheme } from '../../theme';
import { getStyles } from './city-details.view.styles';

export const CityDetailsView = ({
  route,
  navigation,
}: CityDetailsScreenProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const { params } = route;
  const {
    temperatureWithUnits,
    humidityWithUnits,
    pressureWithUnits,
    windDirectionWithUnits,
    windSpeedWithUnits,
  } = useGetFormattedBaseWeatherData(params.city);
  const windIconStyle: ViewStyle = {
    transform: [{ rotate: `${params.city.wind.deg}deg` }],
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: params.city.name });
  }, [navigation, params.city.name]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OpenWeatherIcon size={80} icon={params.city.weather[0]?.icon} />
      <View style={styles.mainDataContainer}>
        <Text variant="headlineMedium">{params.city.name}</Text>
        <Text style={styles.description} variant="bodyLarge">
          {params.city.weather[0].description}
        </Text>
      </View>
      <View style={styles.weatherDataContainer}>
        <WeatherDataSection
          label={temperatureWithUnits}
          Icon={
            <Icon color={theme.colors.primary} size={30} source="thermometer" />
          }
        />
        <WeatherDataSection
          label={humidityWithUnits}
          Icon={<Icon color={theme.colors.primary} size={30} source="water" />}
        />
        <WeatherDataSection
          label={pressureWithUnits}
          Icon={<Icon color={theme.colors.primary} size={30} source="gauge" />}
        />
        <WeatherDataSection
          label={windSpeedWithUnits}
          Icon={
            <Icon
              color={theme.colors.primary}
              size={30}
              source="weather-windy"
            />
          }
        />
        <WeatherDataSection
          label={windDirectionWithUnits}
          Icon={
            <View style={windIconStyle}>
              <Icon
                color={theme.colors.primary}
                size={30}
                source="arrow-down-thin"
              />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};
