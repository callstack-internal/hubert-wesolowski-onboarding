import { WindUnitsSymbols } from '../../../types/open-weather';
import { useUnitsContext } from '../../contexts/units-context';

enum WindDirections {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
  NORTH_EAST = 'NORTH_EAST',
  SOUTH_EAST = 'SOUTH_EAST',
  SOUTH_WEST = 'SOUTH_WEST',
  NORTH_WEST = 'NORTH_WEST',
}

const WindDirectionUnit = {
  [WindDirections.NORTH]: 'N',
  [WindDirections.EAST]: 'E',
  [WindDirections.SOUTH]: 'S',
  [WindDirections.WEST]: 'W',
  [WindDirections.NORTH_EAST]: 'NE',
  [WindDirections.SOUTH_EAST]: 'SE',
  [WindDirections.SOUTH_WEST]: 'SW',
  [WindDirections.NORTH_WEST]: 'NW',
} as const;

const isBetween = (num: number, a: number, b: number, inclusive = true) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return inclusive ? num >= min && num <= max : num > min && num < max;
};

const getWindDirectionUnit = (windDirection: number) => {
  switch (true) {
    case isBetween(windDirection, 337.5, 360) ||
      isBetween(windDirection, 0, 22.5): {
      return WindDirectionUnit.NORTH;
    }
    case isBetween(windDirection, 22.5, 67.5): {
      return WindDirectionUnit.NORTH_EAST;
    }
    case isBetween(windDirection, 67.5, 112.5): {
      return WindDirectionUnit.EAST;
    }
    case isBetween(windDirection, 112.5, 157.5): {
      return WindDirectionUnit.SOUTH_EAST;
    }
    case isBetween(windDirection, 157.5, 202.5): {
      return WindDirectionUnit.SOUTH;
    }
    case isBetween(windDirection, 202.5, 247.5): {
      return WindDirectionUnit.SOUTH_WEST;
    }
    case isBetween(windDirection, 247.5, 292.5): {
      return WindDirectionUnit.WEST;
    }
    case isBetween(windDirection, 292.5, 337.5): {
      return WindDirectionUnit.NORTH_WEST;
    }
    default: {
      return 'Unknown';
    }
  }
};

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
