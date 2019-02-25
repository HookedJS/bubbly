import React from "react";
import cx from "classnames";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

import { SnackbarContentStyle } from "./SnackbarContentStyle";
import { SvgIconProps } from "~/themes/bubbly/node_modules/@material-ui/core/SvgIcon";

export const SnackbarContent = withStyles(SnackbarContentStyle)((
  {
    classes,
    message,
    closeNotification,
    color = "info",
    close,
    Icon,
  }
    : WithStyles<typeof SnackbarContentStyle> & {
    message: React.ReactNode,
    closeNotification: () => void,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    close?: boolean,
    Icon?: React.ComponentClass<SvgIconProps> | any,
  }
) => {

  let action: React.ReactNode[] = [];

  const messageClasses = cx({
    [classes.iconMessage]: Icon !== undefined
  });

  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }

  const iconClasses = cx({
    [classes.icon]: classes.icon,
    // @ts-ignore: Ignore missing signature
    [classes[color + "Icon"]]: true,
  });

  return (
    <Snack
      message={
        <div>
          {Icon !== undefined ? <Icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message
      }}
      action={action}
    />
  );
});

// SnackbarContent.defaultProps = {
//   color: "info"
// };
//
// SnackbarContent.propTypes = {
//   classes: PropTypes.object.isRequired,
//   message: PropTypes.node.isRequired,
//   color: PropTypes.oneOf([
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "primary",
//     "rose"
//   ]),
//   close: PropTypes.bool,
//   Icon: PropTypes.func
// };

export default SnackbarContent;
