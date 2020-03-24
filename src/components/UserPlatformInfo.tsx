import * as React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoComponent from "./InfoComponent";
import "../stylesheets/UserInfo.scss";

const UserPlatformInfo = (props: any) => {
  // console.log(props.user);

  return (
    <div className="user-platform-info">
      <Grid container spacing={3}>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent
            item="Connections"
            value={props.user.connections}
          ></InfoComponent>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <InfoComponent
            item="Total Activity"
            value={props.user.totalActivity}
          ></InfoComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPlatformInfo;
