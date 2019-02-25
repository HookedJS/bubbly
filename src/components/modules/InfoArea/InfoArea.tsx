import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { InfoStyle } from "./InfoStyle";
import { SvgIconProps } from "~/themes/bubbly/node_modules/@material-ui/core/SvgIcon";

export const InfoArea = withStyles(InfoStyle)((
  {
    classes,
    Icon,
    title,
    description,
    iconColor="gray"
  }
  : WithStyles<typeof InfoStyle> & {
    Icon: React.ComponentClass<SvgIconProps> | any,
    title: string,
    description: string,
    iconColor: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
  }
) => {
  return (
    <div className={classes.infoArea}>
      <div className={classes.iconWrapper + " " + classes[iconColor]}>
        <Icon className={classes.icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
});

// InfoArea.defaultProps = {
//   iconColor: "gray"
// };

// InfoArea.propTypes = {
//   classes: PropTypes.object.isRequired,
//   icon: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   iconColor: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ])
// };

export default InfoArea;
