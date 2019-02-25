import React from "react";
import cx from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import Close from "@material-ui/icons/Close";

import { SnackbarContentStyle } from "./SnackbarContentStyle";
import { SvgIconProps } from "~/themes/bubbly/node_modules/@material-ui/core/SvgIcon";

export const Snackbar = withStyles(SnackbarContentStyle)((
  {
    classes,
    message,
    closeNotification,
    color = "info",
    close,
    Icon,
    place,
    open = false,
  }
  : WithStyles<typeof SnackbarContentStyle> & {
    message: React.ReactNode,
    closeNotification: () => void,
    place: "tl" | "tr" | "tc" | "br" | "bl" | "bc",
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    close?: boolean,
    Icon?: React.ComponentClass<SvgIconProps> | any,
    open?: boolean,
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
        onClick={closeNotification}
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
      classes={{
        anchorOriginTopCenter: classes.top20,
        anchorOriginTopRight: classes.top40,
        anchorOriginTopLeft: classes.top40
      }}
      anchorOrigin={{
        vertical: place.indexOf("t") === -1 ? "bottom" : "top",
        horizontal:
          place.indexOf("l") !== -1
            ? "left"
            : place.indexOf("c") !== -1
            ? "center"
            : "right"
      }}
      open={open}
      message={
        <div>
          {Icon !== undefined ? <Icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          // @ts-ignore: Ignore missing signature
          root: classes.root + " " + classes[color],
          message: classes.message
        }
      }}
    />
  );
});

// Snackbar.defaultProps = {
//   color: "info"
// };

// Snackbar.propTypes = {
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
//   icon: PropTypes.func,
//   place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
//   open: PropTypes.bool
// };

export default Snackbar;
