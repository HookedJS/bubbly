import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { BadgeStyle } from "./BadgeStyle";

export const Badge = withStyles(BadgeStyle)((
  {
    classes,
    color = "primary",
    children
  }: WithStyles<typeof BadgeStyle> & {
    color?: "primary" | "danger" | "success" | "info" | "warning" | "rose" | "gray",
    children: React.ReactNode,
  }
) => {
  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
});

// Badge.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   children: PropTypes.object.isRequired
// };

export default Badge;
