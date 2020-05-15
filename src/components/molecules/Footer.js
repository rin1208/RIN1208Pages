import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  text-align: center;
  height: 70vh;
  background-color: #87cefa;
`;
const H = styled.div`
  color: #ffffff;
  padding-top: 30vh;
`;
const Huga = styled.h3`
  text-align: center;
`;

const Line = styled.hr`
  color: #ffffff;
  height: 3px;
  background-color: #87cefa;
  border: none;
`;

function Footer() {
  return (
    <div>
      <Line />

      <Huga>©2020 RIN1208</Huga>
    </div>
  );
}

export default Footer;
