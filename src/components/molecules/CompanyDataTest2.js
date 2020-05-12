import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div({
  display: "flex",
  margin: 20,
});

function CompanyDataTest() {
  var data = [
    {
      hoge: "企業名",
      huga: "サーバーサイドエンジニアインターン",
      hugahuga: "8月上旬",
      piyo: "hogehoge",
    },
    {
      hoge: "企業名",
      huga: "サーバーサイドエンジニアインターン",
      hugahuga: "8月上旬",
      piyo: "hogehoge",
    },
    {
      hoge: "企業名",
      huga: "サーバーサイドエンジニアインターン",
      hugahuga: "8月上旬",
      piyo: "hogehoge",
    },
    {
      hoge: "企業名",
      huga: "サーバーサイドエンジニアインターン",
      hugahuga: "8月上旬",
      piyo: "hogehoge",
    },
  ];
  var list = data.map(function(item) {
    return (
      <Grid item xs={6}>
        <div>
          <h3>{item.hoge}</h3>
          <h3>期間</h3>
          <p>{item.hugahuga}</p>
          <h3>内容</h3>
          <p>{item.huga}</p>
          <h3>URL</h3>
          <p>{item.piyo}</p>
        </div>
      </Grid>
    );
  });

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          {list}
        </Grid>
      </Grid>
    </div>
  );
}

export default CompanyDataTest;
