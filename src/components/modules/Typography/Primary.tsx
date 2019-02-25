import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { TypographyStyle } from "./TypographyStyle";

export const Primary = withStyles(TypographyStyle)((
  {
    classes ,
    children
  }
    : WithStyles<typeof TypographyStyle> & {
    children: React.ReactChild,
  }
) => {
  return (
    <div className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </div>
  );
});

// Primary.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Primary;
