import * as React from "react";
import UserInfo from "./UserInfo";
import { UserBasicInfo, UserActivity } from "./Models/User";
import Typography from "@material-ui/core/Typography";
import "../stylesheets/UserInfo.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Grid, Button, Icon } from "@material-ui/core";
import "../stylesheets/RecentActivity.scss";
import { GridList, GridListTile } from "@material-ui/core";
import ActivityItem from "./ActivityItem";

interface Props {
  activities: UserActivity[];
}

interface State {}

class RecentActivity extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    const activity = this.props.activities;

    return (
      <div className="main-left">
        <div className="user-info">
          <Typography className="section-header name" variant="h5" gutterBottom>
            Recent Activity
          </Typography>
          <GridList cellHeight={50} className="grid-list" cols={1}>
            {activity.map(item => (
              <GridListTile key={item.id} cols={1}>
                <ActivityItem></ActivityItem>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default RecentActivity;
