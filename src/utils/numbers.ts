export const isBetween = (
  num: number,
  a: number,
  b: number,
  inclusive = true,
) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return inclusive ? num >= min && num <= max : num > min && num < max;
};
