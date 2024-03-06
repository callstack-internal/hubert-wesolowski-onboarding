import { OPEN_WEATHER_API_KEY } from '@env';

import { OWGroupResponse } from '../../../../types/open-weather';
import { fetchClient } from '../../../utils/fetch';
import { WeatherGroupScheme } from './weather-group-scheme';

export const getCitiesWeather = async (ids: number[]) => {
  try {
    const { data } = await fetchClient.get<OWGroupResponse>('/data/2.5/group', {
      params: { id: ids.join(','), appid: OPEN_WEATHER_API_KEY },
    });

    return WeatherGroupScheme.parse(data.list);
  } catch (e) {
    console.log(e);
  }
};
