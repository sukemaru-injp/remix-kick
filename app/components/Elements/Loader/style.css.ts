import { style, keyframes } from '@vanilla-extract/css';
import { colors, spacing } from '~/components/common/style';
/* HTML: <div class="loader"></div> */

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});
export const loader = style({
  width: '50px',
  height: '50px',
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: spacing.m,
  aspectRatio: 1,
  borderRadius: '50%',
  border: `5px solid ${colors.main}`,
  borderBottomColor: 'transparent',
  animation: `${rotate} 1.5s linear infinite`,
});

export const container = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  backgroundColor: 'rgba(204, 204, 255, 30%)',
});
