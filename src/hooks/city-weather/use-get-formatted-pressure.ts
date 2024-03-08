export const useGetFormattedPressure = (pressure: number) => {
  const formattedPressure = `${pressure} hPa`;

  return {
    pressureWithUnits: formattedPressure,
  };
};
