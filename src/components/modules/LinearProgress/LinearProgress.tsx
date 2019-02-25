import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { default as LinearProgressDefault, LinearProgressProps } from "@material-ui/core/LinearProgress";

import { LinearProgressStyle } from "./LinearProgressStyle";

export const LinearProgress = withStyles(LinearProgressStyle)((
  {
    classes,
    color = "primary",
    ...rest
  }
  : WithStyles<typeof LinearProgressStyle> & Omit<LinearProgressProps, 'color'> & {
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
  }
) => {
  return (
    <LinearProgressDefault
      {...rest}
      classes={{
        // @ts-ignore: Ignore missing signature
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
});

// LinearProgress.defaultProps = {
//   color: "gray"
// };

// LinearProgress.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ])
// };

export default LinearProgress;
