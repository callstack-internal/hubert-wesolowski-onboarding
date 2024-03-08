declare module '@env' {
  export const BASE_API_URL: string;
  export const OPEN_WEATHER_API_KEY: string;
  export const OPEN_WEATHER_BASE_API_URL: string;
  export const OPEN_WEATHER_BASE_ICON_URL: string;
}

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
