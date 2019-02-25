import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardTextStyle } from "./CardTextStyle";

const CardText = withStyles(CardTextStyle)((
  {
    classes,
    className = "",
    children,
    color = "primary",
    ...rest }
  : WithStyles<typeof CardTextStyle> & {
    children: React.ReactNode,
    className?: string,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose",
  }
) => {
  const cardTextClasses = ClassNames({
    [classes.cardText]: true,
    // @ts-ignore: Ignore missing signature
    [classes[color + "CardHeader"]]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardTextClasses} {...rest}>
      {children}
    </div>
  );
});

// CardText.propTypes = {
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

export default CardText;
