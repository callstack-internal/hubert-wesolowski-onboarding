import { useContext } from 'react';
import { SegmentedButtons } from 'react-native-paper';

import { TemperatureUnits } from '../../../types/open-weather';
import { UnitsContext } from '../../contexts/units-context';

export const TemperatureUnitsToolbar = () => {
  const { units, setUnits } = useContext(UnitsContext);
  const handleSetUnits = (newUnits: TemperatureUnits) => {
    setUnits(newUnits);
  };

  return (
    <SegmentedButtons
      value={units}
      multiSelect={false}
      onValueChange={handleSetUnits as (val: string) => string}
      buttons={Object.values(TemperatureUnits).map(tempUnit => ({
        value: tempUnit,
        label: tempUnit,
      }))}
    />
  );
};
