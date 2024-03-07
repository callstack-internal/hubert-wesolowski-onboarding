import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_API_URL } from '@env';
import axios from 'axios';

export const fetchClient = axios.create({
  baseURL: OPEN_WEATHER_BASE_API_URL,
  params: {
    appid: OPEN_WEATHER_API_KEY,
  },
});
