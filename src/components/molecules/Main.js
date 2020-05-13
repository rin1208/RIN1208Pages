import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  text-align: center;
  color: #ffffff;

  background-color: #87cefa;
`;

function Main() {
  return (
    <div>
      <Hoge>
        <h1>Welcome to RIN1208's site </h1>
      </Hoge>
    </div>
  );
}

export default Main;
