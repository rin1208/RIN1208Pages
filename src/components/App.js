import React from "react";

import Profile from "./molecules/Profile";
import Main from "./molecules/Main";
import Skill from "./molecules/Skill";
import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Main />

      <Profile />
      <Skill />
    </React.Fragment>
  );
}

export default App;
