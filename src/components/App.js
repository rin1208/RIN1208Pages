import React from "react";

import Profile from "./molecules/Profile";
import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

const Hoge = styled.div({
  display: "flex",
  margin: 20,
});

function App() {
  return (
    <React.Fragment>
      <AppBar position="static" aria-label="Global Navi">
        <Toolbar>
          <Hoge>
            <Typography variant="subtitle1">RIN1208</Typography>
          </Hoge>
        </Toolbar>
      </AppBar>

      <Profile />
    </React.Fragment>
  );
}

export default App;
