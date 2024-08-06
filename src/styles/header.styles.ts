import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  headerContainer: {
    height: "4em",
    background: theme.palette.common.white,
    alignItems: "center",
    padding: "0 1em",
  },
  logoContainer: {},
  mobileLogo: {},
}));
