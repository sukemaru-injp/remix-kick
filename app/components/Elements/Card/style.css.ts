import { style } from '@vanilla-extract/css';
import { spacing, borderDefault } from '~/components/common/style';

export const card = style({
  borderRadius: '8px',
  border: borderDefault,
  display: 'inline-block',
  minWidth: '320px',
});

export const content = style({
  padding: spacing.m,
});

export const head = style({
  padding: spacing.m,
  borderBottom: borderDefault,
});
export const title = style({
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

export const foot = style({
  padding: spacing.m,
  borderTop: borderDefault,
});
