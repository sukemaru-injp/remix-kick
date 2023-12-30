import { style } from '@vanilla-extract/css';
import { borderDefault, spacing, radius } from '~/components/common/style';

export const input = style({
  border: borderDefault,
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: radius,

  ':focus': {
    outline: 'none',
  },
});
