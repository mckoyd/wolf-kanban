import { tss } from "tss-react/mui";

export const useAddTaskBtnStyles = tss.create(({ theme }) => ({
  addTaskBtn: {
    background: theme.palette.common.mainPurple,
    minWidth: 0,
    width: "3em",
    height: "2em",
    borderRadius: "1.5em",
    "&:disabled": {
      background: theme.palette.common.purpleHover,
    },
    "&:hover": {},
  },
  addTaskIcon: {},
}));
