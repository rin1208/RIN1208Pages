import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  text-align: center;
  height: 60vh;
  background-color: #87cefa;
`;
const H = styled.div`
  color: #ffffff;
  padding-top: 20vh;
`;
const Link = styled.div`
  color: #ffffff;
  text-align: center;
`;

const Line = styled.hr`
  color: #ffffff;
  height: 3px;
  background-color: #ffffff;
  border: none;
`;

function Main() {
  return (
    <div>
      <Hoge>
        <H>
          <h1>Welcome to RIN1208's site</h1>
        </H>
        <Line />

        <Link>
          <p>Home</p>
        </Link>
      </Hoge>
    </div>
  );
}

export default Main;
