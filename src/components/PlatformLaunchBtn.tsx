import React from "react";
import { IconButton } from "@mui/material";

import { ReactComponent as ChevronDownIcon } from "../assets/images/icon-chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "../assets/images/icon-chevron-up.svg";
import { usePlatformLaunchBtnStyles } from "../styles/platformLaunchBtn.styles";
import { useRecoilState } from "recoil";
import { platformLaunchOpenState } from "../state";

const PlatformLaunchBtn: React.FC = () => {
  const { classes } = usePlatformLaunchBtnStyles();

  const [platformLaunchIsOpen, setPlatformLaunchIsOpen] = useRecoilState(
    platformLaunchOpenState
  );

  const handlePlatformLaunchBtn = () => {
    setPlatformLaunchIsOpen((prev: boolean) => !prev);
  };

  return (
    <IconButton className={classes.iconBtn} onClick={handlePlatformLaunchBtn}>
      {platformLaunchIsOpen ? (
        <ChevronUpIcon className={classes.iconBtnImg} />
      ) : (
        <ChevronDownIcon className={classes.iconBtnImg} />
      )}
    </IconButton>
  );
};

export default PlatformLaunchBtn;
