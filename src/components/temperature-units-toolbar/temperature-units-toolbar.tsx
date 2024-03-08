import { useContext } from 'react';
import { View } from 'react-native';
import { Button, MD3Colors } from 'react-native-paper';

import { TemperatureUnits } from '../../../types/open-weather';
import { UnitsContext } from '../../contexts/units-context';
import { styles } from './temperature-units-toolbar.styles';

export const TemperatureUnitsToolbar = () => {
  const { setUnits } = useContext(UnitsContext);
  const handleSetUnits = (newUnits: TemperatureUnits) => () => {
    setUnits(newUnits);
  };

  return (
    <View style={styles.container}>
      {Object.values(TemperatureUnits).map(tempUnit => (
        <Button
          key={tempUnit}
          mode="contained"
          buttonColor={MD3Colors.tertiary70}
          onPress={handleSetUnits(tempUnit)}
        >
          {tempUnit}
        </Button>
      ))}
    </View>
  );
};
