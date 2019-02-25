import React from "react";
import cx from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { HeadingStyle } from "./HeadingStyle";

export const Heading = withStyles(HeadingStyle)((
  {
    classes,
    title,
    category,
    textAlign
  }
  : WithStyles<typeof HeadingStyle> & {
    title?: string,
    category?: string,
    textAlign?: "right" | "left" | "center",
  }
) => {
  const heading =
    classes.heading +
    " " +
    cx({
      // @ts-ignore: Ignore missing signature
      [classes[textAlign + "TextAlign"]]: textAlign !== undefined
    });
  if (title !== undefined || category !== undefined) {
    return (
      <div className={heading}>
        {title !== undefined ? (
          <h3 className={classes.title}>{title}</h3>
        ) : null}
        {category !== undefined ? (
          <p className={classes.category}>{category}</p>
        ) : null}
      </div>
    );
  }
  return null;
});

// Heading.propTypes = {
//   classes: PropTypes.object.isRequired,
//   title: PropTypes.node,
//   category: PropTypes.node,
//   textAlign: PropTypes.oneOf(["right", "left", "center"])
// };

export default Heading;
