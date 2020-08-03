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

function Career() {
  var front = [
    {
      name: "JX通信社",
      job: "サーバーサイドエンジニアインターン",
      star: "March, 2019 ~ July, 2020",
    },
    {
      name: "CA Tech Dojo",
      job: "サーバーサイド(Go編)",
      star: "March, 2020  (1Week)",
    },
  ];
  var list = front.map(function (item) {
    return (
      <Grid item xs={12} md={6}>
        <Sub>
          <h3>{item.name}</h3>
          <h3>{item.job}</h3>
          <p>{item.star}</p>
        </Sub>
      </Grid>
    );
  });
  return (
    <div>
      <Main>
        <h1>Intern Career</h1>
      </Main>

      <Main>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            {list}
          </Grid>
        </Grid>
      </Main>
      <Main></Main>
      <Main></Main>
    </div>
  );
}

export default Career;
