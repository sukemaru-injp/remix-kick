import { style } from '@vanilla-extract/css';
import { spacing, colors } from '~/components/common/style';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.small,
  border: 'none',
  color: colors.link,
  padding: spacing.small,
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

export const iconWrapper = style({
  width: '24px',
  height: '24px',
});
