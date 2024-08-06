import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  headerContainer: {
    height: "4em",
    background: theme.palette.common.white,
    alignItems: "center",
    padding: "0 1em",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    gap: "1em",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
    gap: "0.5em",
  },
  logoContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  mobileLogo: {},
  platformLaunchContainer: {
    display: "flex",
    alignItems: "center",
  },
  platformLaunchText: {
    ...(theme.typography.headingL as CSSProperties),
  },
}));
