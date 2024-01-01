import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../../common/style';

const base = style({
  width: '100%',
  height: '100%',
  textDecoration: 'none',
});

export const linkStyle = styleVariants({
  link: [base, { color: colors.link }],
  white: [base, { color: colors.white }],
});
