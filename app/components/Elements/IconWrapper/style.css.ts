import { style } from '@vanilla-extract/css';
import { colors } from '../../common/style';

export const wrapper = style({
  maxWidth: '100%',
  maxHeight: '100%',
  height: '100%',
  cursor: 'pointer',
});

export const icon = style({
  color: colors.white,
  height: '100%',
  width: '100%',
});
