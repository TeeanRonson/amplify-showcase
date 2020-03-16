import * as React from "react";
import UserInfo from "./UserInfo";
import { Grid, Button, Icon } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { UserBasicInfo } from "../Models/User";
import "../stylesheets/UserInfo.scss";
import UserPlatformInfo from "./UserPlatformInfo";
import { IconButton } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../stylesheets/DisplayUser.scss";

interface Props {
  user: UserBasicInfo;
}

interface State {
  user: UserBasicInfo;
}

class DisplayUser extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: props.user
    };
  }

  componentDidMount(): void {}

  render() {
    const user = this.state;

    return (
      <div className="top-section">
        <div className="user-info">
          <Typography className="section-header name" variant="h5" gutterBottom>
            User Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <UserInfo key={user.user.sub} user={user.user} />
            </Grid>
            <Grid item alignItems="center" xs={12} md={6} lg={6}>
              <Button
                variant="contained"
                color="primary"
                className="button"
                endIcon={<VisibilityIcon>View</VisibilityIcon>}
                size="small"
              >
                Profile
              </Button>
            </Grid>
          </Grid>
          <UserPlatformInfo></UserPlatformInfo>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default DisplayUser;
