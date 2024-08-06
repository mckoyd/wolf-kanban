import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(({ theme }) => ({
  appContainer: {
    width: "100vw",
    height: "100vh",
  },
}));
