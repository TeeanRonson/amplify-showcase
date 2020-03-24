import * as React from "react";
import Search from "./Search";
import { UserBasicInfo } from "../components/Models/User";
import "../stylesheets/AllUsersControl.scss";
import { GridList, GridListTile } from "@material-ui/core";
import UserInfo from "./UserInfo";
import { List, ListItem } from "@material-ui/core";

interface Props {
  users: UserBasicInfo[];
  handleViewUserClick: (e: any) => void;
}

interface State {
  selectedIndex: number;
}

class DisplayAllUsers extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
  }

  componentDidMount(): void {}

  render() {
    const { users, handleViewUserClick } = this.props;
    const selectedIndex = this.state.selectedIndex;

    return (
      <div className="left-section root">
        <Search></Search>

        <GridList cellHeight={90} className="grid-list" cols={1}>
          {users.map(user => (
            <GridListTile key={user.firstName} cols={1}>
              <UserInfo
                key={user.firstName}
                user={user}
                handleViewUserClick={handleViewUserClick}
              />
            </GridListTile>
          ))}
        </GridList>
        {/* <UserList users={users}></UserList> */}
      </div>
    );
  }
}

export default DisplayAllUsers;
