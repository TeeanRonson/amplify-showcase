import * as React from "react";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Icon } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "../stylesheets/UserActivity.scss";

const ActivityItem = (props: any) => {
  const activity = props;

  // console.log(props);

  // console.log(activity);

  return (
    <div className="user-activity">
      <Grid container spacing={1}>
        <Grid item xs={12} md={2} lg={2}>
          <Avatar
            className="activity-user-image"
            alt=""
            src={activity.item.profileIcon}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Typography
            className="activity"
            align="center"
            variant="h5"
            gutterBottom
          >
            {`${activity.item.activity}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Button
            onClick={e => props.removeItem(activity.item)}
            size="small"
            className="remove"
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivityItem;
