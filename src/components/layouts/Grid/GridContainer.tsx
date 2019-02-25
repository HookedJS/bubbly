import React from "react";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const style = {
  grid: {
    margin: "0 -15px",
    width: "calc(100% + 30px)"
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  }
};

export const GridContainer = withStyles(style)((
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
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
});

export default GridContainer;
