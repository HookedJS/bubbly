import React from "react";
import cx from "classnames";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";

import { InstructionStyle } from "./InstructionStyle";

export const Instruction = withStyles(InstructionStyle)((
  {
    classes,
    title,
    text,
    image,
    className,
    imageClassName,
    imageAlt='...',
  }
  : WithStyles<typeof InstructionStyle> & {
    className?: string,
    title: string,
    text: React.ReactNode | string,
    image: string,
    imageAlt?: string,
    imageClassName?: string,
  }
) => {
  const instructionClasses = cx({
    [classes.instruction]: true,
    [className!]: className !== undefined
  });
  const pictureClasses = cx({
    [classes.picture]: true,
    [imageClassName!]: imageClassName !== undefined
  });
  return (
    <div className={instructionClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <strong>{title}</strong>
          <p>{text}</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div className={pictureClasses}>
            <img src={image} alt={imageAlt} className={classes.image} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
});

// Instruction.defaultProps = {
//   imageAlt: "..."
// };

// Instruction.propTypes = {
//   classes: PropTypes.object.isRequired,
//   title: PropTypes.node.isRequired,
//   text: PropTypes.node.isRequired,
//   image: PropTypes.string.isRequired,
//   imageAlt: PropTypes.string,
//   className: PropTypes.string,
//   imageClassName: PropTypes.string
// };

export default Instruction;
