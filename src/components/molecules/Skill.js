import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import Rating from "@material-ui/lab/Rating";

const Main = styled.div`
  display: "flex";
  margin: 20;
  text-align: center;
`;

const Sub = styled.div`
  text-align: center;
`;

const period = styled.div`
  background-color: #87cefa;
  color: #87cefa;
`;

function Skill() {
  var skill = [
    {
      name: "Go ",
      period: "October, 2018 ~",
    },
    {
      name: "Python  ",
      period: "May, 2019  ~",
    },
    {
      name: "node.js  ",
      period: "April, 2020 ~",
    },
    {
      name: "Javascrpt ",
      period: " June, 2019 ~",
    },
    {
      name: "Vuejs  ",
      period: "June, 2019 ~",
    },
    {
      name: "Reactjs  ",
      period: "June, April, 2020 ~",
    },
    {
      name: "MySQL  ",
      period: "April, 2019 ~",
    },
    {
      name: "Dynamodb ",
      period: " October, 2019 ~",
    },
    {
      name: "S3 ",
      period: " June, 2019 ~",
    },
    {
      name: "Elasticsearch  ",
      period: "September, 2019 ~",
    },
    {
      name: "Git ",
      period: " October, 2018 ~",
    },
    {
      name: "Docker ",
      period: "April, 2019 ~",
    },
    {
      name: "Docker-Compose ",
      period: "April, 2019 ~",
    },
    {
      name: "Firebase ",
      period: "December, 2019 ~",
    },
    {
      name: "Kubernetes ",
      period: "April, 2020 ~",
    },
  ];
  var list = skill.map(function(item) {
    return (
      <Grid item xs={6} md={3}>
        <Sub>
          <h3>{item.name}</h3>
          <p>{item.period}</p>
        </Sub>
      </Grid>
    );
  });
  return (
    <div>
      <Main>
        <h1>Skills</h1>
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

export default Skill;
