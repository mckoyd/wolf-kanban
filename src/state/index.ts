import { atom } from "recoil";

export const platformLaunchOpenState = atom({
  key: "platformLaunchOpenStateKey",
  default: false,
});

export const menuBtnOpenState = atom({
  key: "menuBtnOpenStateKey",
  default: false,
});

export const addNewColumnClickedState = atom({
  key: "addNewColumnClickedStateKey",
  default: false,
});
