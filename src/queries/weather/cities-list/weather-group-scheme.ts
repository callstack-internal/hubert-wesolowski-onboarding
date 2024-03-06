import { z } from 'zod';

export const WeatherGroupScheme = z
  .object({
    weather: z
      .object({
        main: z.string(),
        icon: z.string(),
      })
      .array(),
    main: z.object({
      temp: z.number(),
      humidity: z.number(),
      pressure: z.number(),
    }),
    wind: z.object({ speed: z.number(), deg: z.number() }),
    clouds: z.object({ all: z.number() }),
    name: z.string(),
    id: z.number(),
  })
  .array();
