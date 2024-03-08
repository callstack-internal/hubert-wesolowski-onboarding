import { useMemo } from 'react';

import { TemperatureUnitsSymbols } from '../../../types/open-weather';
import { useUnitsContext } from '../../contexts/units-context';

export const useGetFormattedTemperature = (temp: number) => {
  const { units } = useUnitsContext();

  const unitSymbol = TemperatureUnitsSymbols[units];
  const temperatureWithUnits = useMemo(
    () => `${Math.round(temp)} ${unitSymbol}`,
    [temp, unitSymbol],
  );

  return { temperatureWithUnits };
};
