import { style } from '@vanilla-extract/css';
import { colors, radius, spacing } from '~/components/common/style';

export const modal = style({
  padding: spacing.m,
  backgroundColor: colors.white,
  borderRadius: radius,
});

export const mainArea = style({
  display: 'block',
});

export const footerArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: spacing.s,
});
