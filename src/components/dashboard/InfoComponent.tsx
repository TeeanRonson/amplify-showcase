import * as React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import "../stylesheets/UserInfo.scss";

const UserPlatformInfo = (props: any) => {
  return (
    <React.Fragment>
      {" "}
      <Typography
        className="section-header name"
        variant="h5"
        gutterBottom
        align="left"
      >
        {props.item}
      </Typography>
      <Typography className="item-name" variant="h4" gutterBottom align="left">
        {props.value}
      </Typography>
    </React.Fragment>
  );
};

export default UserPlatformInfo;
