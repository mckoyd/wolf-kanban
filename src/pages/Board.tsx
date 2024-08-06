import React from "react";
import { Grid } from "@mui/material";

import { useBoardStyles } from "../styles/board.styles";

const Board: React.FC = () => {
  const { classes } = useBoardStyles();

  return <Grid container className={classes.boardContainer}></Grid>;
};

export default Board;
