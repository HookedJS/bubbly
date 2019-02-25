import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { CardBlockStyle } from "./CardBlockStyle";
import { CardProps } from "@material-ui/core/Card";
import {Card} from "./Card";
import {CardHeader} from "./CardHeader";
import {CardIcon} from "./CardIcon";
import {CardBody} from "./CardBody";


// TODO: Use Cardblock globally

export type CardBlockProps = WithStyles<typeof CardBlockStyle> & {
  cardProps?: CardProps,
  Icon?: React.ComponentClass<SvgIconProps> | any,
  title: string,
  children: React.ReactNode,
};

export const CardBlock = withStyles(CardBlockStyle)((
  {
    classes,
    cardProps = {},
    Icon,
    title,
    children,
  }
  : CardBlockProps
) => {
  return (
    <Card>
      <CardHeader color="rose" icon>
        <CardIcon color="rose">
          {Icon ? <Icon /> : <h4 className={classes.cardIconTitle}>{title}</h4>}
        </CardIcon>
        {Icon && <h4 className={classes.cardTitle}>{title}</h4>}
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
});

export default CardBlock;
