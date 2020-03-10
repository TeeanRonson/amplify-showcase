import * as React from "react";
import PrimarySearchAppBar from "./components/PrimaryAppBar";
import { Grid, Container, Paper, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Copyright from "./components/Copyright";
import "./App.scss";
import UserList from "./components/UserList";
import DisplayAllUsers from "./components/DisplayAllUsers";

interface Props {
  //   featuredProjects: ProjectCard[];
}

interface State {}

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
                <DisplayAllUsers></DisplayAllUsers>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className="paper-mixed">Selected User</Paper>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className="paper-mixed">Connections</Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className="paper-mixed">Recent Activity</Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
