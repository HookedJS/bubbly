import React from "react";

import { UseComponentSize } from "~/core/hooks/UseComponentSize";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import GridContainer from "../../layouts/Grid/GridContainer";
import GridItem from "../../layouts/Grid/GridItem";

import { HorizontalBlockStyle } from "./HorizontalBlockStyle";

export type HorizontalBlockProps = WithStyles<typeof HorizontalBlockStyle> & {
  label?: React.ReactNode,
  labelRight?: React.ReactNode,
  children: React.ReactNode,
  style?: {
    wrapper?: {},
    label?: {},
    column1?: {},
    column2?: {},
    column3?: {},
  },
  className?: {
    wrapper?: string,
    label?: string,
    column1?: string,
    column2?: string,
    column3?: string,
  }
};

export const HorizontalBlock = withStyles(HorizontalBlockStyle)((
  {
    classes,
    label = "",
    labelRight = "",
    children,
    style = {},
    className = {},
  }
    : HorizontalBlockProps
) => {

  const ref = React.useRef(null);
  const size = UseComponentSize(ref);

  const labelWidth = size.width > 600 ? 2 : 3;
  const inputWidth = size.width > 600 ? 9 : 8;
  const rightWidth = size.width > 600 ? 1 : 1;

  const normalJsx = (
    <div ref={ref}>{children}</div>
  );

  const paddedJsx = (
    <div style={style.wrapper} ref={ref} className={classes.wrapper + " " + className.wrapper}>
      <GridContainer>
        <GridItem xs={labelWidth} className={className.column1} style={style.column1}>
          <div style={style.label} className={classes.label + " " + className.label}>{label}</div>
        </GridItem>
        <GridItem xs={inputWidth} style={style.column2} className={className.column2} >
          {children}
        </GridItem>
        <GridItem xs={rightWidth} style={style.column3} className={className.column3} >{labelRight}</GridItem>
      </GridContainer>
    </div>
  );

  return size.width >= 520 ? paddedJsx : normalJsx;
});

export default HorizontalBlock;
