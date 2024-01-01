import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.small,
});

export const inputSection = style({});
