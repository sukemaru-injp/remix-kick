import { style } from '@vanilla-extract/css';
import { colors, spacing } from '~/components/common/style';

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.s,
});

export const mainSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: spacing.s,
});

export const formSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.ml,
  width: '100%',
});
export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  color: colors.text,
});

export const buttonSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: spacing.s,
});

export const errorLabel = style({
  color: colors.error,
});
