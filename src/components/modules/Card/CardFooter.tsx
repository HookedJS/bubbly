import React from "react";
import ClassNames from "classnames";
// import PropTypes from "prop-types";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardFooterStyle } from "./CardFooterStyle";

const CardFooter = withStyles(CardFooterStyle)((
  {
    classes,
    className='',
    children,
    plain,
    profile,
    pricing,
    testimonial,
    stats,
    chart,
    product,
    ...rest
  }
  : WithStyles<typeof CardFooterStyle> & {
    children: React.ReactNode,
    className?: string,
    plain?: boolean,
    profile?: boolean,
    pricing?: boolean,
    testimonial?: boolean,
    stats?: boolean,
    chart?: boolean,
    product?: boolean,
  }
) => {
  const cardFooterClasses = ClassNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart || product,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
});

// CardFooter.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   plain: PropTypes.bool,
//   profile: PropTypes.bool,
//   pricing: PropTypes.bool,
//   testimonial: PropTypes.bool,
//   stats: PropTypes.bool,
//   chart: PropTypes.bool,
//   product: PropTypes.bool
// };

export default CardFooter;
