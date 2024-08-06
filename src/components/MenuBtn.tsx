import React from "react";
import { IconButton } from "@mui/material";

import { ReactComponent as VerticalEllipsisIcon } from "../assets/images/icon-vertical-ellipsis.svg";
import { useMenuBtnStyles } from "../styles/menuBtn.styles";
import { useRecoilState } from "recoil";
import { menuBtnOpenState } from "../state";

const MenuBtn: React.FC = () => {
  const { classes } = useMenuBtnStyles();

  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuBtnOpenState);

  const handleMenuBtn = () => {
    setIsMenuOpen((prev: boolean) => !prev);
  };
  return (
    <IconButton className={classes.menuBtn} onClick={handleMenuBtn}>
      <VerticalEllipsisIcon className={classes.menuBtnIcon} />
    </IconButton>
  );
};

export default MenuBtn;
