import { style } from "@vanilla-extract/css";
import { spacing } from "~/components/common/style";

export const card = style({
  borderRadius: '8px',
  border: `1px solid #ccc`,
  display: 'inline-block',
  minWidth: '320px'
})

export const content = style({
  padding: spacing.medium
})

export const head = style({
  padding: spacing.medium,
  borderBottom: `1px solid #ccc`
})
export const title = style({
  fontSize: '1.2rem',
  fontWeight: 'bold'
})