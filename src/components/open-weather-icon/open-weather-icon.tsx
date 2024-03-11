import { OPEN_WEATHER_BASE_ICON_URL } from '@env';
import { Image } from 'react-native';

type Props = {
  icon?: string;
  size?: number;
};

const defaultIconSize = 50;

export const OpenWeatherIcon = ({ icon, size = defaultIconSize }: Props) => {
  const iconUrl = icon ? `${OPEN_WEATHER_BASE_ICON_URL}${icon}.png` : null;
  const iconStyles = {
    width: size,
    height: size,
  };

  if (!iconUrl) {
    return null;
  }

  return (
    <Image
      resizeMethod="scale"
      resizeMode="cover"
      style={iconStyles}
      source={{ uri: iconUrl }}
    />
  );
};
