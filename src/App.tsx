import * as React from "react";
import "./App.scss";
import {Routes} from "./routers/Router";

interface Props {
}

interface State {}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return <Routes/>;
  }
}

export default App;
