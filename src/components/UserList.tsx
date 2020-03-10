import * as React from "react";
import UserInfo from "./UserInfo";

interface Props {}

interface State {}

const samples = [
  {
    sub: "1232",
    profileIcon: "image.png",
    firstName: "Rong",
    lastName: "Liew",
    location: "San Francisco, USA",
    about: "I am a man that goes to Mars"
  },
  {
    sub: "123123",
    profileIcon: "image.png",
    firstName: "Perry",
    lastName: "Song",
    location: "Shenzhen, China",
    about: "Piano player @ USF"
  },
  {
    sub: "12312312",
    profileIcon: "asd.png",
    firstName: "ShenYi",
    lastName: "Lu",
    location: "New York, USA",
    about: "True Gamer."
  }
];

class UserList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    return (
      <div className="all-users">
        {samples.map(person => (
          <UserInfo key={person.firstName} person={person} />
        ))}
      </div>
    );
  }
}

export default UserList;
