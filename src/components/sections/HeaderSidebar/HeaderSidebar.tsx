import React from "react";
import cx from "classnames";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import ViewList from "@material-ui/icons/ViewList";

// core components
import HeaderLinks from "./HeaderLinks";
import Button from "../../modules/Buttons/Button";

import { HeaderSidebarStyle } from "./HeaderSidebarStyle";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface HeaderLink {
  name: string;
  path: string;
  icon: React.ComponentType<SvgIconProps> | string;
  layout?: React.ComponentClass;
  view?: React.LazyExoticComponent<any>;
  views?: HeaderLink[];
  collapse?: boolean;
  redirect?: string;
  hideInMenu?: boolean;
}

const HeaderSidebar = withStyles(HeaderSidebarStyle)((
  {
    classes,
    color,
    links,
    rtlActive,
    sidebarMinimize,
    miniActive,
    handleDrawerToggle
  }
  : WithStyles<typeof HeaderSidebarStyle> & {
  color?: "primary" | "info" | "success" | "warning" | "danger",
  links: HeaderLink[],
  rtlActive: boolean,
  sidebarMinimize: () => void,
  miniActive: boolean,
  handleDrawerToggle: () => void,
}) => {

  const makeBrand = () => {
    var name;
    links.map((prop, key) => {
      if (prop.collapse && prop.views) {
        prop.views.map((prop, key) => {
          if (prop.path === window.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      }
      if (prop.path === window.location.pathname) {
        name = prop.name;
      }
      return null;
    });
    if (name) {
      return name;
    } else {
      return "Home";
    }
  };

  const appBarClasses = cx({
    [" " + classes[color!]]: color
  });
  const sidebarMinimizeClasses =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive
    });


  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimizeClasses}>
            {miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={sidebarMinimize}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={sidebarMinimize}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
});

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
//   rtlActive: PropTypes.bool
// };

export default HeaderSidebar;
