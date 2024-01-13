import { style } from '@vanilla-extract/css';
import { colors, spacing } from '~/components/common/style';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing.m,
});

export const title = style({
  display: 'inline-block',
  color: colors.text,
  whiteSpace: 'nowrap',
});

export const top = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.m,
  width: '100%',
});

export const cardArea = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.m,
  width: '100%',
  justifyContent: 'center',
});
