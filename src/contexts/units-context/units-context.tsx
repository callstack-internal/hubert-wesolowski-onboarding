import React, { PropsWithChildren, useContext } from 'react';

import { TemperatureUnits } from '../../../types/open-weather';
import { UnitsContextState } from './units-context.types';

export const UnitsContext = React.createContext<UnitsContextState>({
  units: TemperatureUnits.STANDARD,
  setUnits: () => {},
});

export const UnitsContextProvider = ({ children }: PropsWithChildren) => {
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
    <UnitsContext.Provider value={memoedValue}>
      {children}
    </UnitsContext.Provider>
  );
};

export const useUnitsContext = () => {
  const contextValue = useContext(UnitsContext);

  if (!contextValue) {
    throw new Error(
      'UnitsContext can be used only within UnitsContextProvider',
    );
  }

  return contextValue;
};
