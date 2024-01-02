import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

export const root = style({
  padding: spacing.m,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.m,
});
