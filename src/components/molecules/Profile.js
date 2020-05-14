import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "@emotion/styled";

const Hoge = styled.div`
  display: "flex";
  margin: 20;
`;

function Profile() {
  return (
    <div>
      <Hoge>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <h1>PROFILE</h1>
          </Grid>
          <Grid item xs={6}>
            <h3>自己紹介</h3>
            <ul>
              <li class="tab">Name: RIN1208 (Backend Engineer)</li>
              <li class="tab">Date of birth: August , 23 , 1999</li>
              <li class="tab">My location: Japan, Tokyo</li>
            </ul>
          </Grid>
        </Grid>
      </Hoge>
    </div>
  );
}

export default Profile;
