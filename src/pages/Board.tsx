import React from "react";
import { Grid } from "@mui/material";

import { useBoardStyles } from "../styles/board.styles";
import EmptyBoard from "../components/EmptyBoard";

const Board: React.FC = () => {
  const { classes } = useBoardStyles();

  return (
    <Grid container className={classes.boardContainer}>
      <EmptyBoard />
    </Grid>
  );
};

export default Board;
