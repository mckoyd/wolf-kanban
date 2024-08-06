import React from "react";
import { Grid } from "@mui/material";

import { ReactComponent as MobileLogo } from "../assets/images/logo-mobile.svg";
import { useHeaderStyles } from "../styles/header.styles";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();

  return (
    <Grid container className={classes.headerContainer}>
      <Grid item className={classes.logoContainer}>
        <MobileLogo className={classes.mobileLogo} />
      </Grid>
    </Grid>
  );
};

export default Header;
