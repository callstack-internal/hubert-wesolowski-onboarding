import React, { PropsWithChildren } from 'react';

import { TemperatureUnits } from '../../../types/open-weather';
import { UnitsContextState } from './temperature-units-context.types';

export const TemperatureUnitsContext = React.createContext<UnitsContextState>({
  units: TemperatureUnits.STANDARD,
  setUnits: () => {},
});

export const TemperatureUnitsContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [units, setUnits] = React.useState<TemperatureUnits>(
    TemperatureUnits.STANDARD,
  );

  const memoedValue = React.useMemo(
    () => ({
      units,
      setUnits,
    }),
    [units, setUnits],
  );

  return (
    <TemperatureUnitsContext.Provider value={memoedValue}>
      {children}
    </TemperatureUnitsContext.Provider>
  );
};
