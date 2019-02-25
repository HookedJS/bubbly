import React from "react";
import ClassNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import CoreButton from "@material-ui/core/Button";
import {ButtonProps} from "@material-ui/core/Button";

import { ButtonStyle } from "./ButtonStyle";

export interface ButtonPropsExt extends Omit<ButtonProps, 'color'> {
  round?: boolean,
  simple?: boolean,
  block?: boolean,
  link?: string,
  justIcon?: boolean,
  muiClasses?: any,
  color?: "primary" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "gray" | "twitter" | "facebook" | "google" | "linkedin" | "pinterest" | "youtube" | "tumblr" | "github" | "behance" | "dribbble" | "reddit" | "transparent" | string,
}

export const Button = withStyles(ButtonStyle)((
  {
    classes ,
    color = "primary",
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  }
  : WithStyles<typeof ButtonStyle> & ButtonPropsExt
) => {
  const btnClasses = ClassNames({
    [classes.button]: true,
    // @ts-ignore: ignore undeclared id attribute
    [classes[size!]]: size,
    // @ts-ignore: ignore undeclared id attribute
    [classes[color!]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className!]: className
  });
  return (
    <CoreButton {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </CoreButton>
  );
});

// RegularButton.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose",
//     "white",
//     "twitter",
//     "facebook",
//     "google",
//     "linkedin",
//     "pinterest",
//     "youtube",
//     "tumblr",
//     "github",
//     "behance",
//     "dribbble",
//     "reddit",
//     "transparent"
//   ]),
//   size: PropTypes.oneOf(["sm", "lg"]),
//   simple: PropTypes.bool,
//   round: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   block: PropTypes.bool,
//   link: PropTypes.bool,
//   justIcon: PropTypes.bool,
//   className: PropTypes.string,
//   muiClasses: PropTypes.object
// };

export default Button;
