import { style, styleVariants } from '@vanilla-extract/css';
import { colors, spacing } from '../../common/style';

const sizes = {
  small: '24px',
  medium: '28px',
  large: '32px',
} as const;

const wrapperBase = style({
  padding: spacing.s,
});

export const wrapper = styleVariants({
  small: [wrapperBase, { height: sizes.small, width: sizes.small }],
  medium: [wrapperBase, { height: sizes.medium, width: sizes.medium }],
  large: [wrapperBase, { height: sizes.large, width: sizes.large }],
});

const base = style({
  width: '100%',
  height: '100%',
});

export const iconColor = styleVariants({
  primary: [base, { color: colors.main }],
  white: [base, { color: colors.white }],
  red: [base, { color: colors.error }],
});

export const iconWhite = style({
  color: colors.white,
  width: '100%',
  height: '100%',
});
export const iconMain = style({
  width: '100%',
  height: '100%',
});

const baseButtonStyle = style({
  padding: spacing.s,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

export const buttonInner = style({
  display: 'inline-flex',
  alignSelf: 'center',
  position: 'relative',
});

export const button = styleVariants({
  small: [baseButtonStyle, { height: sizes.small, width: sizes.small }],
  medium: [baseButtonStyle, { height: sizes.medium, width: sizes.medium }],
  large: [baseButtonStyle, { height: sizes.large, width: sizes.large }],
});
