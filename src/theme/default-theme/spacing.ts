import { Spacing } from './theme.types';

export const SPACING_BASE = 8;

export const spacing = {
  [Spacing.XXS]: SPACING_BASE / 4, // 2
  [Spacing.XS]: SPACING_BASE / 2, // 4
  [Spacing.SM]: SPACING_BASE, // 8
  [Spacing.MD]: SPACING_BASE * 1.5, // 12
  [Spacing.LG]: SPACING_BASE * 2, // 16
  [Spacing.XL]: SPACING_BASE * 2.5, // 20
  [Spacing.XXL]: SPACING_BASE * 3, // 24
};
