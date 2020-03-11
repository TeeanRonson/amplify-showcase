import * as React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoComponent from "./InfoComponent";
import "../stylesheets/UserInfo.scss";

const UserPlatformInfo = (props: any) => {
  return (
    <div className="user-platform-info">
      <Grid container spacing={3}>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent item="Skills" value="100"></InfoComponent>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent item="Projects" value="20"></InfoComponent>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent item="Connections" value="15"></InfoComponent>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent item="Total Activity" value="28"></InfoComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPlatformInfo;
