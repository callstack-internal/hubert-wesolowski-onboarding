export const useGetFormattedHumidity = (humidity: number) => {
  const formattedHumidity = `${humidity} %`;

  return {
    humidityWithUnits: formattedHumidity,
  };
};
