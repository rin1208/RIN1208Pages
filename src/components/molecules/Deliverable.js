import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  display: "flex";
  margin: 20;
  text-align: center;
`;

const Huga = styled.div`
  text-align: center;
`;

const Star = styled.div`
  background-color: #87cefa;
  color: #87cefa;
`;

function Deliverable() {
  var front = [
    {
      name: "JX通信社",
      job: "サーバーサイドエンジニアインターン",
      star: "March, 2019 ~",
    },
    {
      name: "CA Tech Dojo",
      job: "サーバーサイド(Go編)",
      link: "March, 2020  (2Week)",
    },
  ];
  var list = front.map(function(item) {
    return (
      <Grid item xs={12} md={6}>
        <Huga>
          <h3>{item.name}</h3>
          <h3>概要</h3>
          <p>{item.job}</p>
          <h3 href={item.link}>ソースコード</h3>
        </Huga>
      </Grid>
    );
  });
  return (
    <div>
      <Hoge>
        <h1>Deliverable</h1>
      </Hoge>

      <Hoge>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            {list}
          </Grid>
        </Grid>
      </Hoge>
    </div>
  );
}

export default Deliverable;
