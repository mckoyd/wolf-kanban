import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { globalStyles } from "../styles/global.styles";

import Header from "../components/Header";
import Board from "./Board";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </div>
  );
};

export default App;
