import { style } from '@vanilla-extract/css';
import { colors, radius, spacing, fixedBg } from '~/components/common/style';

export const overlay = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  backgroundColor: fixedBg,
  padding: spacing.m,
});

export const modal = style({
  display: 'inline-block',
  padding: spacing.m,
  backgroundColor: colors.white,
  borderRadius: radius,
  margin: 'auto',
});

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing.m,
});

export const mainArea = style({
  display: 'block',
});

export const footerArea = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: spacing.m,
});
