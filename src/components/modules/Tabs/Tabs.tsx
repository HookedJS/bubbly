import React from "react";
import ClassNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import {default as TabsDefault} from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Card from "@bubbly/components/modules/Card/Card";
import CardBody from "@bubbly/components/modules/Card/CardBody";
import CardHeader from "@bubbly/components/modules/Card/CardHeader";

import { TabsStyle } from "./TabsStyle";

export const Tabs = withStyles(TabsStyle)((
  {
    classes,
    headerColor = "info",
    plainTabs = false,
    tabs,
    title,
    rtlActive = false,
  }
  : WithStyles<typeof TabsStyle> & {
    headerColor?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    plainTabs?: boolean,
    tabs: {
      TabIcon?: React.ComponentClass<SvgIconProps> | any,
      tabName: string,
      tabContent: React.ReactChild,
    }[],
    title?: string,
    rtlActive?: boolean,
  }
) =>  {

  const [value, setValue] = React.useState(0);
  
    const cardTitle = ClassNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive
    });


    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <TabsDefault
            value={value}
            onChange={(event, value) => setValue(value)}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone
            }}
          >
            {tabs.map((prop, key) => {
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper
                  }}
                  key={key}
                  label={prop.tabName}
                  icon={prop.TabIcon ? <prop.TabIcon /> : undefined}
                />
              );
            })}
          </TabsDefault>
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            return key === value ? <div key={key}>{prop.tabContent}</div> : null;
          })}
        </CardBody>
      </Card>
    );
  
});

// Tabs.propTypes = {
//   classes: PropTypes.object.isRequired,
//   headerColor: PropTypes.oneOf([
//     "warning",
//     "success",
//     "danger",
//     "info",
//     "primary",
//     "rose"
//   ]),
//   title: PropTypes.string,
//   tabs: PropTypes.arrayOf(
//     PropTypes.shape({
//       tabName: PropTypes.string.isRequired,
//       TabIcon: PropTypes.func,
//       tabContent: PropTypes.node.isRequired
//     })
//   ),
//   rtlActive: PropTypes.bool,
//   plainTabs: PropTypes.bool
// };

export default Tabs;
