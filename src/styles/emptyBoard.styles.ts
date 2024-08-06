import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useEmptyBoardStyles = tss.create(({ theme }) => ({
  emptyBoardContainer: {
    padding: "0 1em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    justifyContent: "center",
    flexGrow: 1,
  },
  emptyBoardText: {
    ...(theme.typography.headingL as CSSProperties),
    textAlign: "center",
    color: theme.palette.common.mediumGray,
  },
}));
