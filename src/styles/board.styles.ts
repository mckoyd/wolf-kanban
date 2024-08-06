import { tss } from "tss-react/mui";

export const useBoardStyles = tss.create(({ theme }) => ({
  boardContainer: {
    height: "calc(100% - 4em)",
  },
}));
