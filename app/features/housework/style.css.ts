import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.m,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing.s,
});

export const dateText = style({
  fontWeight: 'bold',
});

export const iconArea = style({
  padding: spacing.s,
});
