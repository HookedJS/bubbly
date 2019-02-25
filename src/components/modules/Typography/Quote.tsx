import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { TypographyStyle } from "./TypographyStyle";

export const Quote = withStyles(TypographyStyle)((
  {
    classes ,
    text,
    author,
  }
    : WithStyles<typeof TypographyStyle> & {
    text: React.ReactChild,
    author: React.ReactChild,
  }
) => {
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
});

// Quote.propTypes = {
//   classes: PropTypes.object.isRequired,
//   text: PropTypes.node,
//   author: PropTypes.node
// };

export default Quote;
