import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardStyle } from "./CardStyle";
import { CardProps } from "@material-ui/core/Card";


export const Card = withStyles(CardStyle)((
  {
    classes,
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    chart,
    login,
    ...rest
  }
  : WithStyles<typeof CardStyle> & CardProps & {
    plain?: boolean,
    profile?: any,
    blog?: any,
    background?: any,
    pricing?: any,
    product?: any,
    testimonial?: any,
    chart?: any,
    login?: any,
  }
) => {
  const cardClasses = ClassNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color!]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
    [className!]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
});

// Card.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   plain: PropTypes.bool,
//   profile: PropTypes.bool,
//   blog: PropTypes.bool,
//   raised: PropTypes.bool,
//   background: PropTypes.bool,
//   pricing: PropTypes.bool,
//   testimonial: PropTypes.bool,
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose"
//   ]),
//   product: PropTypes.bool,
//   chart: PropTypes.bool,
//   login: PropTypes.bool
// };

export default Card;
