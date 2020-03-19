import * as React from "react";
import UserInfo from "./UserInfo";
import { UserBasicInfo } from "../Models/User";
import Typography from "@material-ui/core/Typography";
import "../stylesheets/UserInfo.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Grid, Button, Icon } from "@material-ui/core";
import "../stylesheets/Connections.scss";

interface Props {
  users: UserBasicInfo[];
}

interface State {}

class Connections extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    const users = this.props;
    return (
      <div className="main-left">
        <div className="user-info">
          <Typography className="section-header name" variant="h5" gutterBottom>
            Connections
          </Typography>
          <div className="all-users">
            {users.users.map(user => (
              <UserInfo key={user.firstName} user={user} connect={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Connections;
