import React from "react";

import Profile from "./molecules/Profile";
import Main from "./molecules/Main";
import Skill from "./molecules/Skill";
import Career from "./molecules/Career";
import Footer from "./molecules/Footer";

import Deliverable from "./molecules/Deliverable";

import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

const Hoge = styled.div`
  display: "flex";
  margin: 150px 0px;
`;

function App() {
  return (
    <React.Fragment>
      <Main />
      <Hoge>
        <Profile />
      </Hoge>
      <Hoge>
        <Skill />
      </Hoge>
      <Hoge>
        <Career />
      </Hoge>
      {/* <Deliverable /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
