import * as React from "react";
import Search from "./Search";
import { UserBasicInfo } from "../components/Models/User";
import "../stylesheets/AllUsersControl.scss";
import { GridList, GridListTile } from "@material-ui/core";
import UserInfo from "./UserInfo";

interface Props {
  users: UserBasicInfo[];
}

interface State {}

class DisplayAllUsers extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    const users = this.props.users;
    return (
      <div className="left-section root">
        <Search></Search>
        <GridList cellHeight={100} className="grid-list" cols={1}>
          {users.map(user => (
            <GridListTile key={user.firstName} cols={1}>
              <UserInfo key={user.firstName} user={user} />
            </GridListTile>
          ))}
        </GridList>
        {/* <UserList users={users}></UserList> */}
      </div>
    );
  }
}

export default DisplayAllUsers;
