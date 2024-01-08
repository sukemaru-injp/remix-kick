import { style } from '@vanilla-extract/css';
import { borderDefault, colors, spacing } from '~/components/common/style';

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

export const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: borderDefault,
  padding: `${spacing.m} 0`,

  ':last-child': {
    borderBottom: 'none',
  },
});

export const icons = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.m,
});
