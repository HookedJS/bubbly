import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { TypographyStyle } from "./TypographyStyle";

export const Danger = withStyles(TypographyStyle)((
  {
    classes ,
    children
  }
  : WithStyles<typeof TypographyStyle> & {
    children: React.ReactChild,
  }
) => {
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
});

// Danger.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Danger;
