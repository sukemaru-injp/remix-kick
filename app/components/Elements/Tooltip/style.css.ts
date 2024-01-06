import { style } from '@vanilla-extract/css';
import { borderDefault, colors, spacing } from '~/components/common/style';

export const tooltip = style({
  border: borderDefault,
  backgroundColor: colors.white,
  padding: spacing.m,
});
