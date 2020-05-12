import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  display: "flex";
  margin: 20;
  background-color: #f5f5f5;
`;

function Profile() {
  return (
    <div>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={6}>
          <Hoge>
            <h1>RIN1208</h1>
          </Hoge>
        </Grid>
        <Grid item xs={6}>
          <Hoge>
            <ul>
              <li class="tab">Name:</li>
              <p class="coment">RIN1208 (Backend Engineer)</p>
            </ul>
            <ul>
              <li class="tab">Date of birth:</li>
              <p class="coment">August , 23 , 1999</p>
            </ul>
            <ul>
              <li class="tab">My location:</li>
              <p class="coment">Japan, Tokyo</p>
            </ul>
            <ul>
              <li class="tab">My Hobby:</li>
              <p class="coment">Anime , Game, Comic market</p>
            </ul>
          </Hoge>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
