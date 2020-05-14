import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import Rating from "@material-ui/lab/Rating";

const Hoge = styled.div`
  display: "flex";
  margin: 20;
`;

function Skill() {
  var front = [
    {
      hoge: "企業名",
      huga: "サーバーサイドエンジニアインターン",
      piyo: 5,
    },
  ];
  var list = front.map(function(item) {
    return (
      <Grid item xs={6}>
        <div>
          <h3>{item.hoge}</h3>
          <h3>期間</h3>
          <p>{item.hugahuga}</p>
          <Rating value={item.piyo} readOnly />
        </div>
      </Grid>
    );
  });
  return (
    <div>
      <Hoge>
        <h1>Skills</h1>
        <h3>Front</h3>
      </Hoge>

      <Hoge>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            {list}
          </Grid>
        </Grid>
      </Hoge>
      <Hoge></Hoge>
      <Hoge></Hoge>
    </div>
  );
}

export default Skill;
