import { PropsWithChildren } from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { PartialOWCityWeather } from '../../../../types/open-weather';
import { styles } from './cities-list.styles';
import { CitiesListEmpty } from './cities-list-empty';
import { CitiesListItem } from './cities-list-item';

type Props = {
  cities?: PartialOWCityWeather[];
  onItemPress: (city: PartialOWCityWeather) => void;
};

export const CitiesList = ({
  cities = [],
  onItemPress,
}: PropsWithChildren<Props>) => {
  const renderListItem = ({ item }: { item: PartialOWCityWeather }) => {
    return <CitiesListItem item={item} onPress={onItemPress} />;
  };

  return (
    <FlatList<PartialOWCityWeather>
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={CitiesListEmpty}
      data={cities}
      renderItem={renderListItem}
      style={styles.list}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};
