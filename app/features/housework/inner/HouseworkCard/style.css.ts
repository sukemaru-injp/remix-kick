import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.s,
});

export const footer = style({
  padding: spacing.s,
});

export const footerButton = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const formButtonSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: spacing.s,
});
