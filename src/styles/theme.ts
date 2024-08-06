import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {
    lightGray: string;
    mainPurple: string;
    purpleHover: string;
    black: string;
    veryDarkGray: string;
    darkGray: string;
    mediumGray: string;
    red: string;
    redHover: string;
    linesDark: string;
    linesLight: string;
  }

  interface TypographyVariants {
    headingXL: CSSProperties;
    headingL: CSSProperties;
    headingM: CSSProperties;
    headingS: CSSProperties;
    bodyL: CSSProperties;
    bodyM: CSSProperties;
  }

  interface TypographyVariantsOptions {
    headingXL?: CSSProperties;
    headingL?: CSSProperties;
    headingM?: CSSProperties;
    headingS?: CSSProperties;
    bodyL?: CSSProperties;
    bodyM?: CSSProperties;
  }
}

export const black = "#000112";
export const lightGray = "#F4F7FD";
export const mainPurple = "#635FC7";
export const purpleHover = "#A8A4FF";
export const redHover = "#FF9898";
export const veryDarkGray = "#20212C";
export const darkGray = "#2B2C37";
export const linesDark = "#3E3F4E";
export const mediumGray = "#828FA3";
export const linesLight = "#E4EBFA";
export const red = "#EA5555";

const theme: Theme = createTheme({
  palette: {
    common: {
      lightGray,
      mainPurple,
      black,
      veryDarkGray,
      darkGray,
      mediumGray,
      red,
      redHover,
      linesLight,
      linesDark,
      purpleHover,
    },
  },

  typography: {
    headingXL: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "1.875rem",
      color: black,
    },
    headingL: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "1.4375rem",
      color: black,
    },
    headingM: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "0.9375rem",
      lineHeight: "1.1875rem",
      color: black,
    },
    headingS: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "0.75rem",
      lineHeight: "0.9375rem",
      color: mediumGray,
      letterSpacing: "0.15rem",
    },
    bodyL: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 500,
      fontSize: "0.8125rem",
      lineHeight: "1.4375rem",
      color: darkGray,
    },
    bodyM: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontSize: "0.75rem",
      lineHeight: "0.9375rem",
      color: darkGray,
    },
  },
});

export default theme;
