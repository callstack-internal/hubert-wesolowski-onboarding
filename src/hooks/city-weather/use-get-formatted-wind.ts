import { WindUnitsSymbols } from '../../../types/open-weather';
import { useUnitsContext } from '../../contexts/units-context';
import { getWindDirectionUnit } from '../../utils/weather';

export const useGetFormattedWind = (
  windSpeed: number,
  windDirection: number,
) => {
  const { units } = useUnitsContext();

  const unitSymbol = WindUnitsSymbols[units];
  const windSpeedWithUnits = `${windSpeed} ${unitSymbol}`;
  const windDirectionWithUnits = getWindDirectionUnit(windDirection);

  return {
    windSpeedWithUnits,
    windDirectionWithUnits,
  };
};
