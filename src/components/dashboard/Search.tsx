import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../stylesheets/Search.scss";
import SearchIcon from "@material-ui/icons/Search";

interface Props {}

interface State {}

class Search extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    return (
      <div>
        <div className="search">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon></SearchIcon>
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Search users" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Search;
