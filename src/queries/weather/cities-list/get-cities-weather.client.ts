import { OPEN_WEATHER_API_KEY } from '@env';

import { OWGroupResponse } from '../../../../types/open-weather';
import { fetchClient } from '../../../utils/fetch';

export const getCitiesWeather = async (ids: number[]) => {
  try {
    const { data } = await fetchClient.get<OWGroupResponse>('/data/2.5/group', {
      params: { id: ids.join(','), appid: OPEN_WEATHER_API_KEY },
    });

    return data.list;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('getCitiesWeather::', e);
  }
};
