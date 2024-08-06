import React from "react";
import { Grid, Typography } from "@mui/material";

import { ReactComponent as MobileLogo } from "../assets/images/logo-mobile.svg";
import { useHeaderStyles } from "../styles/header.styles";
import { platformLaunchText } from "../config/header.config";

import PlatformLaunchBtn from "./PlatformLaunchBtn";
import AddTaskBtn from "./AddTaskBtn";
import MenuBtn from "./MenuBtn";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();

  return (
    <Grid container className={classes.headerContainer}>
      <Grid item className={classes.headerLeft}>
        <Grid item className={classes.logoContainer}>
          <MobileLogo className={classes.mobileLogo} />
        </Grid>
        <Grid item className={classes.platformLaunchContainer}>
          <Typography className={classes.platformLaunchText}>
            {platformLaunchText}
          </Typography>
          <PlatformLaunchBtn />
        </Grid>
      </Grid>
      <Grid item className={classes.headerRight}>
        <AddTaskBtn />
        <MenuBtn />
      </Grid>
    </Grid>
  );
};

export default Header;
