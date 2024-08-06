import React from "react";
import { Button } from "@mui/material";

import { ReactComponent as AddTaskIcon } from "../assets/images/icon-add-task-mobile.svg";
import { useAddTaskBtnStyles } from "../styles/addTaskBtn.styles";

const AddTaskBtn: React.FC = () => {
  const { classes } = useAddTaskBtnStyles();
  return (
    <Button className={classes.addTaskBtn} disabled>
      <AddTaskIcon className={classes.addTaskIcon} />
    </Button>
  );
};

export default AddTaskBtn;
