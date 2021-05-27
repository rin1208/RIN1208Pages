import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Icon from "../images/icon_mikisai.png";
import styled from "@emotion/styled";
import Link from "@material-ui/core/Link";

const Main = styled.div`
  display: "flex";
  margin: 20;
`;

const Sub = styled.div`
  text-align: center;
`;

const Piyo = styled.div`
  display: "flex";
`;

const Img = styled.img`
  text-align: center;
  max-width: 250px;
`;

function Profile() {
  return (
    <div>
      <Sub>
        <h1>PROFILE</h1>
      </Sub>
      <Main>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <Sub>
              <Img src={Icon} alt="Icon" />
            </Sub>
          </Grid>
          <Grid item xs={12} md={6}>
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
            <Piyo>
              <Sub>
                <Grid container item xs={12} spacing={2}>
                  <Grid item md={4} xs={4}>
                    <Link href="https://twitter.com/rin1208_sugi">Twitter</Link>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Link href="https://github.com/rin1208">GitHub</Link>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Link href="https://qiita.com/rin1208">Qiita</Link>
                  </Grid>
                </Grid>
              </Sub>
            </Piyo>
          </Grid>
        </Grid>
      </Main>
    </div>
  );
}

export default Profile;
