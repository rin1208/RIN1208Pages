import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  height: 60vh;
  background-color: #87cefa;
`;
const H = styled.h1`
  text-align: center;
  color: #ffffff;
  line-height: 50vh;
`;

function Main() {
  return (
    <div>
      <Hoge>
        <H>Welcome to RIN1208's site </H>
      </Hoge>
    </div>
  );
}

export default Main;
