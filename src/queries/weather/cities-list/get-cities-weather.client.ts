import { OPEN_WEATHER_API_KEY } from '@env';

import { OWGroupResponse, TempUnit } from '../../../../types/open-weather';
import { fetchClient } from '../../../utils/fetch';

export const getCitiesWeather = async (ids: number[], units: TempUnit) => {
  if (!ids || !ids.length) {
    return [];
  }

  try {
    const { data } = await fetchClient.get<OWGroupResponse>('/data/2.5/group', {
      params: { id: ids.join(','), appid: OPEN_WEATHER_API_KEY, units },
    });

    return data.list;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('getCitiesWeather::', e);
  }
};
