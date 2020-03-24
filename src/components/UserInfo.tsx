import * as React from "react";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Icon } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "../stylesheets/UserInfo.scss";

const UserInfo = (props: any) => {
  const user = props;

  console.log(props);

  return (
    <div className="user-info">
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} lg={2}>
          <Avatar
            className="profile-image"
            alt={user.firstName}
            src={user.user.profileIcon}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography className="name" variant="h5" gutterBottom>
            {`${user.user.firstName} ${user.user.lastName}`}
          </Typography>
          <Typography className="sub-info" variant="h6" gutterBottom>
            {user.user.location}
          </Typography>
          <Typography className="sub-info" variant="subtitle1" gutterBottom>
            {user.user.about}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          {props.connect ? (
            <Button size="small" className="connected">
              Connected
            </Button>
          ) : (
            <Button
              onClick={e => props.handleViewUserClick(user.user)}
              size="small"
              className="view"
            >
              View
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfo;
