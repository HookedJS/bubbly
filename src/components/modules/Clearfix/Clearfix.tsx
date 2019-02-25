import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import { createStyles } from "@material-ui/core/styles";

const style = createStyles({
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
});

export const Clearfix = withStyles(style)(({ ...props }) => {
  const { classes } = props;
  return <div className={classes.clearfix} />;
});

// Clearfix.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Clearfix;
