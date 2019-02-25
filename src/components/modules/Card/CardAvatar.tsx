import React from "react";
import ClassNames from "classnames";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CardAvatarStyle } from "./CardAvatarStyle";

export const CardAvatar = withStyles(CardAvatarStyle)((
  {
    classes,
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  }: WithStyles<typeof CardAvatarStyle> & {
    children: React.ReactNode,
    className?: string,
    plain?: boolean,
    profile?: boolean,
    testimonial?: boolean,
    testimonialFooter?: boolean,
  }
) => {
  const cardAvatarClasses = ClassNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className!]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
});

// CardAvatar.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   profile: PropTypes.bool,
//   plain: PropTypes.bool,
//   testimonial: PropTypes.bool,
//   testimonialFooter: PropTypes.bool
// };

export default CardAvatar;
