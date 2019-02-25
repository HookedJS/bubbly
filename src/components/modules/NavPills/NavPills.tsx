import React from "react";
import ClassNames from "classnames";
import SwipeableViews from "react-swipeable-views";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";

import { NavPillsStyle } from "./NavPillsStyle";

export const NavPills = withStyles(NavPillsStyle)((
  {
    classes,
    active = 0,
    tabs,
    color = "primary",
    direction,
    horizontal,
    alignCenter = false,
  }
  :WithStyles<typeof NavPillsStyle> & {
    active?: number,
    tabs: {
      tabButton: string,
      TabIcon?: React.ComponentClass<SvgIconProps> | any,
      tabContent: any,
    }[],
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    direction?: "rtl",
    horizontal?: {
      tabsGrid: {xs?: number, sm?: number, md?: number, lg?: number},
      contentGrid: {xs?: number, sm?: number, md?: number, lg?: number},
    },
    alignCenter: boolean,
  }
) => {

  const [activeLocal, setActive] = React.useState(active || 0);

  const flexContainerClasses = ClassNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={activeLocal}
      onChange={(event, index) => setActive(index)}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        let icon: React.ComponentClass<SvgIconProps> | any = {};
        if (prop.TabIcon !== undefined) {
          icon["icon"] = <prop.TabIcon className={classes.TabIcon}/>;
        }
        const pillsClasses = ClassNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.TabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              labelContainer: classes.labelContainer,
              label: classes.label,
              selected: classes[color]
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={activeLocal}
        onChangeIndex={(index: number) => setActive(index)}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );

});

// NavPills.defaultProps = {
//   active: 0,
//   color: "primary"
// };

// NavPills.propTypes = {
//   classes: PropTypes.object.isRequired,
//   // index of the default active pill
//   active: PropTypes.number,
//   tabs: PropTypes.arrayOf(
//     PropTypes.shape({
//       tabButton: PropTypes.string,
//       TabIcon: PropTypes.func,
//       tabContent: PropTypes.node
//     })
//   ).isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose"
//   ]),
//   direction: PropTypes.string,
//   horizontal: PropTypes.shape({
//     tabsGrid: PropTypes.object,
//     contentGrid: PropTypes.object
//   }),
//   alignCenter: PropTypes.bool
// };

export default NavPills;
