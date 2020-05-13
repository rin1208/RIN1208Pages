import React from "react";

import Profile from "./molecules/Profile";
import Main from "./molecules/Main";
import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

const Hoge = styled.div`
  height: 60%;
`;

function App() {
  return (
    <React.Fragment>
      <Hoge>
        <Main />
      </Hoge>
      <Profile />
    </React.Fragment>
  );
}

export default App;
