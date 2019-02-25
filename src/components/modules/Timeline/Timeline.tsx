import React from "react";
import cx from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Badge from "@bubbly/components/modules/Badge/Badge";

import { TimelineStyle } from "./TimelineStyle";

export type TimelineStory = {
  inverted?: boolean,
  badgeColor?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
  BadgeIcon?: React.ComponentClass<SvgIconProps> | any,
  title?: React.ReactChild,
  titleColor?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
  footerTitle?: string,
  body: React.ReactChild,
  footer?: React.ReactChild,
}

export const Timeline = withStyles(TimelineStyle)((
  {
    classes,
    stories,
    simple = false,
  }
  : WithStyles<typeof TimelineStyle> & {
    stories: TimelineStory[],
    simple?: boolean,
  }
) => {

  const timelineClass =
    classes.timeline +
    " " +
    cx({
      [classes.timelineSimple]: simple
    });

  return (
    <ul className={timelineClass}>
      {stories.map((prop, key) => {
        const panelClasses =
          classes.timelinePanel +
          " " +
          cx({
            [classes.timelinePanelInverted]: prop.inverted,
            [classes.timelineSimplePanel]: simple
          });
        const timelineBadgeClasses =
          classes.timelineBadge +
          " " +
          classes[prop.badgeColor!] +
          " " +
          cx({
            [classes.timelineSimpleBadge]: simple
          });
        return (
          <li className={classes.item} key={key}>
            {prop.BadgeIcon ? (
              <div className={timelineBadgeClasses}>
                <prop.BadgeIcon className={classes.badgeIcon} />
              </div>
            ) : null}
            <div className={panelClasses}>
              {prop.title ? (
                <div className={classes.timelineHeading}>
                  <Badge color={prop.titleColor}>{prop.title}</Badge>
                </div>
              ) : null}
              <div className={classes.timelineBody}>{prop.body}</div>
              {prop.footerTitle ? (
                <h6 className={classes.footerTitle}>{prop.footerTitle}</h6>
              ) : null}
              {prop.footer ? <hr className={classes.footerLine} /> : null}
              {prop.footer ? (
                <div className={classes.timelineFooter}>{prop.footer}</div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
});

// Timeline.propTypes = {
//   classes: PropTypes.object.isRequired,
//   stories: PropTypes.arrayOf(PropTypes.object).isRequired,
//   simple: PropTypes.bool
// };

export default Timeline;
