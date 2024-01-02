import { style } from '@vanilla-extract/css';
import { spacing, colors } from '~/components/common/style';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.s,
  border: 'none',
  color: colors.link,
  padding: spacing.s,
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

export const iconWrapper = style({
  width: '24px',
  height: '24px',
});
