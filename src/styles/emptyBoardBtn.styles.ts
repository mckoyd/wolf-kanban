import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useEmptyBoardBtnStyles = tss.create(({ theme }) => ({
  emptyBoardBtn: {
    background: theme.palette.common.mainPurple,
    width: "55%",
    margin: "0 auto",
    borderRadius: "1.5em",
    padding: "0.75em",
    "&:hover": {
      background: theme.palette.common.purpleHover,
    },
  },
  addTaskIcon: {
    width: "0.75em",
    height: "0.75em",
  },
  emptyBoardBtnText: {
    textTransform: "none",
    ...(theme.typography.headingM as CSSProperties),
    color: theme.palette.common.white,
  },
}));
