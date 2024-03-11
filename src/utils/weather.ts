import { WindDirectionUnit } from '../../types/open-weather';
import { isBetween } from './numbers';

export const getWindDirectionUnit = (windDirection: number) => {
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
