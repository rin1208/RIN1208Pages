import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Icon from "../images/icon_mikisai.png";
import styled from "@emotion/styled";

const Hoge = styled.div`
  display: "flex";
  margin: 20;
`;

const Huga = styled.div`
  text-align: center;
`;

const Img = styled.img`
  text-align: center;
  max-width: 250px;
`;

function Profile() {
  return (
    <div>
      <Huga>
        <h1>PROFILE</h1>
      </Huga>
      <Hoge>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Huga>
              <Img src={Icon} alt="Icon" />
            </Huga>
          </Grid>
          <Grid item xs={6}>
            <h3>自己紹介</h3>
            <ul>
              <li>Name: RIN1208 (Backend Engineer)</li>
              <li>Date of birth: August , 23 , 1999</li>
              <li>My location: Japan, Tokyo</li>
              <li>
                初めましてRIN1208と申します。
                <br />
                主にサーバーサイドをメインに勉強していてGo等によく触れています
              </li>
            </ul>
          </Grid>
        </Grid>
      </Hoge>
    </div>
  );
}

export default Profile;
