import * as React from "react";
import Search from "./Search";
import UserList from "./UserList";

interface Props {}

interface State {}

class DisplayAllUsers extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    return (
      <div>
        <Search></Search>
        <UserList></UserList>
      </div>
    );
  }
}

export default DisplayAllUsers;
