import { style } from '@vanilla-extract/css';
import { spacing } from '~/components/common/style';

const wrapper = style({
  padding: spacing.m,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.m,
  backgroundColor: 'lightblue',
});

export { wrapper };
