import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardIconStyle } from "./CardIconStyle";

export const CardIcon = withStyles(CardIconStyle)((
  {
    classes,
    className = "",
    children,
    color = "primary",
    ...rest }
  : WithStyles<typeof CardIconStyle> & {
    children: React.ReactNode,
    className?: string,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose",
    plain?: boolean,
    image?: boolean,
    contact?: boolean,
    signup?: boolean,
    stats?: boolean,
    icon?: boolean,
    text?: boolean,
  }
) => {
  const cardIconClasses = ClassNames({
    [classes.cardIcon]: true,
    // @ts-ignore: Ignore missing signature
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
});

// CardIcon.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   color: PropTypes.oneOf([
//     "warning",
//     "success",
//     "danger",
//     "info",
//     "primary",
//     "rose"
//   ])
// };

export default CardIcon;
