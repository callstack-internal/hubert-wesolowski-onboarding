import React from 'react';

import { TemperatureUnits } from '../../../types/open-weather';

export type UnitsContextState = {
  units: TemperatureUnits;
  setUnits: React.Dispatch<React.SetStateAction<TemperatureUnits>>;
};
