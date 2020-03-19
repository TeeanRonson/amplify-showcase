import * as React from "react";
import UserInfo from "./UserInfo";
import { UserBasicInfo, UserActivity } from "../Models/User";
import Typography from "@material-ui/core/Typography";
import "../stylesheets/UserInfo.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Grid, Button, Icon } from "@material-ui/core";
import "../stylesheets/RecentActivity.scss";
import { GridList, GridListTile } from "@material-ui/core";

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
          <GridList cellHeight={100} className="grid-list" cols={1}>
            {activity.map(item => (
              <GridListTile cols={1}>
                <div>{item.activity}</div>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default RecentActivity;
