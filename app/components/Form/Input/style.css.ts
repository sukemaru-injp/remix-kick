import { style } from '@vanilla-extract/css';
import { borderDefault, spacing, radius } from '~/components/common/style';

export const input = style({
  border: borderDefault,
  padding: `${spacing.s} ${spacing.m}`,
  borderRadius: radius,

  ':focus': {
    outline: 'none',
  },
});
