import * as React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import "../stylesheets/UserInfo.scss";

const UserInfo = (props: any) => {
  return (
    <div className="user-info">
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} lg={2}>
          <Avatar
            className="profile-image"
            alt={props.person.name}
            src="/static/images/avatar/1.jpg"
          />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Typography className="name" variant="h5" gutterBottom>
            {`${props.person.firstName} ${props.person.lastName}`}
          </Typography>
          <Typography className="sub-info" variant="h6" gutterBottom>
            {props.person.location}
          </Typography>
          <Typography className="sub-info" variant="subtitle1" gutterBottom>
            {`${props.person.about}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfo;
