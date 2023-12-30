import { style } from '@vanilla-extract/css';
import { colors, spacing, radius } from '~/components/common/style';

const buttonbase = style({
  borderRadius: radius,
  padding: `${spacing.medium} ${spacing.large}`,
  cursor: 'pointer',
  fontSize: '1.1rem',
});

export const primary = style([
  buttonbase,
  {
    backgroundColor: colors.main,
    color: colors.white,
  },
]);

export const secondary = style([
  buttonbase,
  {
    backgroundColor: colors.white,
    color: colors.main,
  },
]);
