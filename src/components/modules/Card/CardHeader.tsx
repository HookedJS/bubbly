import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardHeaderStyle } from "./CardHeaderStyle";

export const CardHeader = withStyles(CardHeaderStyle)((
  {
    classes,
    className,
    children,
    color = "primary",
    plain,
    image,
    contact,
    signup,
    stats,
    icon,
    text,
    ...rest
  }
  : WithStyles<typeof CardHeaderStyle> & {
    children: React.ReactNode,
    className?: string,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    plain?: boolean,
    image?: boolean,
    contact?: boolean,
    signup?: boolean,
    stats?: boolean,
    icon?: boolean,
    text?: boolean,
  }
) => {
  const cardHeaderClasses = ClassNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [classes.cardHeaderText]: text,
    [className!]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
});

// CardHeader.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   color: PropTypes.oneOf([
//     "warning",
//     "success",
//     "danger",
//     "info",
//     "primary",
//     "rose"
//   ]),
//   plain: PropTypes.bool,
//   image: PropTypes.bool,
//   contact: PropTypes.bool,
//   signup: PropTypes.bool,
//   stats: PropTypes.bool,
//   icon: PropTypes.bool,
//   text: PropTypes.bool
// };

export default CardHeader;
