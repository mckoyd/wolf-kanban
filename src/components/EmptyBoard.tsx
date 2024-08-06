import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEmptyBoardStyles } from "../styles/emptyBoard.styles";
import { emptyBoardMessage } from "../config/emptyBoard.config";
import EmptyBoardBtn from "./EmptyBoardBtn";

const EmptyBoard: React.FC = () => {
  const { classes } = useEmptyBoardStyles();

  return (
    <Grid item className={classes.emptyBoardContainer}>
      <Typography className={classes.emptyBoardText}>
        {emptyBoardMessage}
      </Typography>
      <EmptyBoardBtn />
    </Grid>
  );
};

export default EmptyBoard;
