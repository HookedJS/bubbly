import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { TypographyStyle } from "./TypographyStyle";

export const Warning = withStyles(TypographyStyle)((
  {
    classes ,
    children
  }
    : WithStyles<typeof TypographyStyle> & {
    children: React.ReactChild,
  }
) => {
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
});

// Warning.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Warning;
