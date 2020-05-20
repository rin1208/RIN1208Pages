import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Main = styled.div`
  display: "flex";
  margin: 20;
  text-align: center;
`;

const Sub = styled.div`
  text-align: center;
`;

function Deliverable() {
  var front = [
    {
      name: "JX通信社",
      job: "サーバーサイドエンジニアインターン",
      period: "March, 2019 ~",
    },
    {
      name: "CA Tech Dojo",
      job: "サーバーサイド(Go編)",
      period: "March, 2020  (2Week)",
    },
  ];
  var list = front.map(function(item) {
    return (
      <Grid item xs={12} md={6}>
        <Sub>
          <h3>{item.name}</h3>
          <h3>概要</h3>
          <p>{item.job}</p>
          <h3 href={item.period}>ソースコード</h3>
        </Sub>
      </Grid>
    );
  });
  return (
    <div>
      <Main>
        <h1>Deliverable</h1>
      </Main>

      <Main>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            {list}
          </Grid>
        </Grid>
      </Main>
    </div>
  );
}

export default Deliverable;
