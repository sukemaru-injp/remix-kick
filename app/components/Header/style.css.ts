import { style } from "@vanilla-extract/css";
import { colors, spacing } from "../common/style";

export const header = style({
  display: "flex",
  alignItems: "center",
  height: "50px",
  backgroundColor: colors.main,
  color: colors.white,
  padding: spacing.medium,
})