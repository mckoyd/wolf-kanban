import React from "react";
import { Button, Typography } from "@mui/material";

import { ReactComponent as AddTaskIcon } from "../assets/images/icon-add-task-mobile.svg";
import { emptyBoardBtnText } from "../config/emptyBoardBtn.config";
import { useEmptyBoardBtnStyles } from "../styles/emptyBoardBtn.styles";
import { useRecoilState } from "recoil";
import { addNewColumnClickedState } from "../state";

const EmptyBoardBtn: React.FC = () => {
  const { classes } = useEmptyBoardBtnStyles();

  const [addNewColumnBtnClicked, setAddNewBtnClicked] = useRecoilState(
    addNewColumnClickedState
  );

  const handleAddNewColumnBtn = () => {
    setAddNewBtnClicked((prev: boolean) => !prev);
  };

  return (
    <Button className={classes.emptyBoardBtn} onClick={handleAddNewColumnBtn}>
      <Typography component={"span"} className={classes.emptyBoardBtnText}>
        {emptyBoardBtnText}
      </Typography>
    </Button>
  );
};

export default EmptyBoardBtn;
