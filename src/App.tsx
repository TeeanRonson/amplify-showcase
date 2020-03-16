import * as React from "react";
import PrimarySearchAppBar from "./components/dashboard/PrimaryAppBar";
import { Grid, Container, Paper, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Copyright from "./components/dashboard/Copyright";
import "./App.scss";
import AllUsersControl from "./components/dashboard/AllUsersControl";
import DisplayUser from "./components/dashboard/DisplayUser";
import { UserBasicInfo, UserActivity } from "./components/Models/User";
import Connections from "./components/dashboard/Connections";
import RecentActivity from "./components/dashboard/RecentActivity";

interface Props {
  //   featuredProjects: ProjectCard[];
}

interface State {}

const samples: UserBasicInfo[] = [
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
  },
  {
    sub: "1232",
    profileIcon: "image.png",
    firstName: "Hiep",
    lastName: "Bui",
    location: "Seattle, USA",
    about: "AWS"
  },
  {
    sub: "123123",
    profileIcon: "image.png",
    firstName: "Alper",
    lastName: "Ozdamar",
    location: "San Jose, CA",
    about: "Facebook"
  },
  {
    sub: "12312312",
    profileIcon: "asd.png",
    firstName: "Anurag",
    lastName: "Jain",
    location: "Delhi, India",
    about: "Coinbase"
  },
  {
    sub: "12312312",
    profileIcon: "asd.png",
    firstName: "Mario",
    lastName: "Lim",
    location: "San Francisco, USA",
    about: "CISCO"
  }
];

const connections: UserBasicInfo[] = [
  {
    sub: "1232",
    profileIcon: "image.png",
    firstName: "Hiep",
    lastName: "Bui",
    location: "Seattle, USA",
    about: "AWS"
  },
  {
    sub: "123123",
    profileIcon: "image.png",
    firstName: "Alper",
    lastName: "Ozdamar",
    location: "San Jose, CA",
    about: "Facebook"
  },
  {
    sub: "12312312",
    profileIcon: "asd.png",
    firstName: "Anurag",
    lastName: "Jain",
    location: "Delhi, India",
    about: "Coinbase"
  },
  {
    sub: "12312312",
    profileIcon: "asd.png",
    firstName: "Mario",
    lastName: "Lim",
    location: "San Francisco, USA",
    about: "CISCO"
  }
];

const activity: UserActivity[] = [
  {
    sub: "12312",
    profileIcon: "Image.png",
    activity: "Liked Project 1",
    date: new Date()
  },
  {
    sub: "12312",
    profileIcon: "Image.png",
    activity: "Replied to Pengfei Song on Project 2",
    date: new Date()
  }
];

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <main>
          {/* <div className="appBarSpacer" /> */}
          <Container maxWidth="lg" className="container">
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4}>
                <AllUsersControl users={samples}></AllUsersControl>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <DisplayUser user={samples[0]}></DisplayUser>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Connections users={connections} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <RecentActivity activities={activity}></RecentActivity>
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
      </div>
    );
  }
}

export default App;
