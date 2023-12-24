import { style } from "@vanilla-extract/css";
import { spacing } from "~/components/common/style";

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.medium
})