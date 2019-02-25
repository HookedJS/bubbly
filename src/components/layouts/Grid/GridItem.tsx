import React from "react";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Grid, {GridProps} from "@material-ui/core/Grid";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

export const GridItem = withStyles(style)((
  {
    classes,
    children,
    className,
    ...rest
  }
  : WithStyles<typeof style> & GridProps & {
    children: React.ReactNode,
    className?: string,
  }
  ) => {
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
})

export default GridItem;
