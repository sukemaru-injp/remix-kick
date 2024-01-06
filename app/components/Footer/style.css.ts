import { style } from '@vanilla-extract/css';
import { spacing, colors } from '../common/style';

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: spacing.l,
  width: '100%',
  backgroundColor: colors.white,
});

export const wrapper = style({
  display: 'flex',
  gap: spacing.s,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
