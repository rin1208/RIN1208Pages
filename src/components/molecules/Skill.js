import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import Rating from "@material-ui/lab/Rating";

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

function Skill() {
  var front = [
    {
      name: "Go : ",
      star: "October, 2018 ~",
    },
    {
      name: "Python : ",
      star: "May, 2019  ~",
    },
    {
      name: "node.js : ",
      star: "April, 2020 ~",
    },
    {
      name: "Javascrpt :",
      star: " June, 2019 ~",
    },
    {
      name: "Vuejs : ",
      star: "June, 2019 ~",
    },
    {
      name: "Reactjs : ",
      star: "June, April, 2020 ~",
    },
    {
      name: "MySQL : ",
      star: "April, 2019 ~",
    },
    {
      name: "Dynamodb :",
      star: " October, 2019 ~",
    },
    {
      name: "S3 :",
      star: " June, 2019 ~",
    },
    {
      name: "Elasticsearch : ",
      star: "September, 2019 ~",
    },
    {
      name: "Git :",
      star: " October, 2018 ~",
    },
    {
      name: "Docker: ",
      star: "April, 2019 ~",
    },
    {
      name: "Docker-Compose: ",
      star: "April, 2019 ~",
    },
    {
      name: "Firebase: ",
      star: "December, 2019 ~",
    },
    {
      name: "Kubernetes: ",
      star: "April, 2020 ~",
    },
  ];
  var list = front.map(function(item) {
    return (
      <Grid item xs={6}>
        <Huga>
          <h3>{item.name}</h3>
          <p>{item.star}</p>
        </Huga>
      </Grid>
    );
  });
  return (
    <div>
      <Hoge>
        <h1>Skills</h1>
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
