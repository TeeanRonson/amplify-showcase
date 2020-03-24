import * as React from "react";
import PrimarySearchAppBar from "./components/PrimaryAppBar";
import { Grid, Container, Paper, Box, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Copyright from "./components/Copyright";
import "./App.scss";
import AllUsersControl from "./components/AllUsersControl";
import DisplayUser from "./components/DisplayUser";
import { UserBasicInfo, UserActivity } from "./components/Models/User";
import Connections from "./components/Connections";
import RecentActivity from "./components/RecentActivity";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

interface Props {
  //   featuredProjects: ProjectCard[];
}

interface State {
  coffeebreak: boolean;
}

const samples: UserBasicInfo[] = [
  {
    sub: "0",
    profileIcon:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    firstName: "Yen",
    lastName: "Liew",
    location: "San Francisco, USA",
    about: "I am a man that goes to Mars"
  },
  {
    sub: "1",
    profileIcon:
      "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80",
    firstName: "Perry",
    lastName: "Song",
    location: "Shenzhen, China",
    about: "Piano player @ USF"
  },
  {
    sub: "2",
    profileIcon:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    firstName: "ShenYi",
    lastName: "Lu",
    location: "New York, USA",
    about: "True Gamer."
  },
  {
    sub: "3",
    profileIcon:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    firstName: "Hiep",
    lastName: "Bui",
    location: "Seattle, USA",
    about: "AWS"
  },
  {
    sub: "4",
    profileIcon:
      "https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    firstName: "Alper",
    lastName: "Ozdamar",
    location: "San Jose, CA",
    about: "Facebook"
  },
  {
    sub: "5",
    profileIcon:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    firstName: "Anurag",
    lastName: "Jain",
    location: "Delhi, India",
    about: "Coinbase"
  },
  {
    sub: "6",
    profileIcon:
      "https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    firstName: "Mario",
    lastName: "Lim",
    location: "San Francisco, USA",
    about: "CISCO"
  }
];

const connections: UserBasicInfo[] = [
  {
    sub: "1232",
    profileIcon:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    firstName: "Hiep",
    lastName: "Bui",
    location: "Seattle, USA",
    about: "AWS"
  },
  {
    sub: "123123",
    profileIcon:
      "https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    firstName: "Alper",
    lastName: "Ozdamar",
    location: "San Jose, CA",
    about: "Facebook"
  },
  {
    sub: "12312312",
    profileIcon:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    firstName: "Anurag",
    lastName: "Jain",
    location: "Delhi, India",
    about: "Coinbase"
  },
  {
    sub: "12312312",
    profileIcon:
      "https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    firstName: "Mario",
    lastName: "Lim",
    location: "San Francisco, USA",
    about: "CISCO"
  }
];

const activity: UserActivity[] = [
  {
    id: 20,
    profileIcon:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    activity: '@Yen just commented on your post. "haha great job!"',
    date: new Date()
  },
  {
    id: 0,
    profileIcon:
      "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80",
    activity: "Replied to Pengfei Song on Project 2",
    date: new Date()
  },
  {
    id: 1,
    profileIcon:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    activity: 'Alper really likes this piece of work"',
    date: new Date()
  },
  {
    id: 2,
    profileIcon:
      "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80",
    activity: "Mario says good work to all SDLC class members!",
    date: new Date()
  },
  {
    id: 3,
    profileIcon:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    activity: 'Alper really likes this piece of work"',
    date: new Date()
  },
  {
    id: 4,
    profileIcon:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    activity: "Mario says good work to all SDLC class members!",
    date: new Date()
  }
];

const inspiration = [
  "https://images.unsplash.com/photo-1582832172472-c1ce8ec9c3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1487349703519-90c8e4f426a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3394&q=80",
  "https://images.unsplash.com/photo-1558015245-cfeabcaa793a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1578393882596-86157d72e161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2223&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1542806109-e88b46573e79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1448317846460-907988886b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
];

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      coffeebreak: false
    };
  }

  toggleCoffeeBreak = () => {
    this.state.coffeebreak == false
      ? this.setState({ coffeebreak: true })
      : this.setState({ coffeebreak: false });
  };

  randomNumber = () => {
    let value = 0;
    value = Math.floor(Math.random() * 10 + 0);
    return value;
  };

  componentDidUpdate() {}

  handleViewUserClick = (event: any) => {
    console.log("event", event);
    console.log("its working!");
  };

  render() {
    let value = this.randomNumber();

    return (
      <div>
        <div>
          {this.state.coffeebreak === false ? (
            <main>
              <PrimarySearchAppBar
                toggleBackdrop={this.toggleCoffeeBreak}
              ></PrimarySearchAppBar>
              {/* <div className="appBarSpacer" /> */}
              <Container maxWidth="lg" className="container">
                <Grid container className="left-pane" spacing={3}>
                  <Grid item xs={12} md={4} lg={4}>
                    <AllUsersControl
                      users={samples}
                      handleViewUserClick={this.handleViewUserClick}
                    ></AllUsersControl>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Grid container spacing={0}>
                      <Grid item xs={12} md={12} lg={12}>
                        <DisplayUser user={samples[0]}></DisplayUser>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={6}>
                          <Connections users={connections} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          <RecentActivity
                            activities={activity}
                          ></RecentActivity>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <Box pt={4}>
                <Copyright />
              </Box>
            </main>
          ) : (
            <div className="container">
              <img className="coffeebreak" src={inspiration[value]}></img>
              <div>
                {" "}
                <Button
                  className="btn"
                  variant="outlined"
                  onClick={this.toggleCoffeeBreak}
                >
                  <ArrowBackIcon className="spacing"></ArrowBackIcon>
                  Showcase
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
