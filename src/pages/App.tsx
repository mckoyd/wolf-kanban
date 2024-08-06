import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { globalStyles } from "../styles/global.styles";

import Header from "../components/Header";
import Board from "./Board";
import { useAppStyles } from "../styles/app.styles";

const App: React.FC = () => {
  const { classes } = useAppStyles();

  return (
    <div className={classes.appContainer}>
      <GlobalStyles styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </div>
  );
};

export default App;
