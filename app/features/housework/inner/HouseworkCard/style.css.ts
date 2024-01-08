import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.s,
});
