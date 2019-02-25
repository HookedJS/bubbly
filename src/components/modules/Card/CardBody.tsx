import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardBodyStyle } from "./CardBodyStyle";

export const CardBody = withStyles(CardBodyStyle)((
  {
    classes,
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    profile,
    calendar,
    ...rest
  } : WithStyles<typeof CardBodyStyle> & {
    children: React.ReactNode,
    className?: string,
    background?: boolean,
    plain?: boolean,
    formHorizontal?: boolean,
    pricing?: boolean,
    signup?: boolean,
    color?: boolean,
    profile?: boolean,
    calendar?: boolean
  }
) => {
  const cardBodyClasses = ClassNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [classes.cardBodyProfile]: profile,
    [classes.cardBodyCalendar]: calendar,
    [className!]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
});

// CardBody.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   background: PropTypes.bool,
//   plain: PropTypes.bool,
//   formHorizontal: PropTypes.bool,
//   pricing: PropTypes.bool,
//   signup: PropTypes.bool,
//   color: PropTypes.bool,
//   profile: PropTypes.bool,
//   calendar: PropTypes.bool
// };

export default CardBody;
