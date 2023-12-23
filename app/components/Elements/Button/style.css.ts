import { style } from "@vanilla-extract/css";
import { colors, spacing } from "~/components/common/style";

const buttonbase = style({
  borderRadius: '8px',
  padding: `${spacing.medium} ${spacing.large}`,
  cursor: 'pointer',
  fontSize: '1.1rem'
})

export const primary = style([
  buttonbase,
  {
    backgroundColor: colors.main,
    color: colors.white
  },
])

export const secondary = style([
  buttonbase,
  {
    backgroundColor: colors.white,
    color: colors.main
  },
])