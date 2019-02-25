import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

import { AppName } from "~/var/config";

// core components
import Button from "../../modules/Buttons/Button";

import { HeaderFullWidthStyle } from "./HeaderFullWidthStyle";

export interface HeaderLink {
  name: string;
  path: string;
  icon: React.ComponentType<SvgIconProps>;
  layout?: React.ComponentClass;
  view?: React.LazyExoticComponent<any>;
  views?: HeaderLink[];
  collapse?: boolean;
}

const HeaderFullWidth = withStyles(HeaderFullWidthStyle)((
  {
    classes,
    color,
    links
  } : WithStyles<typeof HeaderFullWidthStyle> & {
    color?: "primary" | "info" | "success" | "warning" | "danger",
    links: HeaderLink[]
  }
) => {
  const [open, setOpen] = React.useState(false);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return window.location.pathname.indexOf(routeName) > -1;
  };

  const appBarClasses = cx({
    [" " + classes[color!]]: color
  });
  var list = (
    <List className={classes.list}>
      {links.map((prop, key) => {
        const navLink =
          classes.navLink +
          cx({
            [" " + classes.navLinkActive]: activeRoute(prop.path)
          });
        return (
          <ListItem key={key} className={classes.listItem}>
            <NavLink to={prop.path} className={navLink}>
              <ListItemIcon className={classes.listItemIcon}>
                <prop.icon/>
              </ListItemIcon>
              <ListItemText
                primary={prop.name}
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {AppName}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {AppName}
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <Menu/>
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={() => setOpen(!open)}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );

});

export default HeaderFullWidth;






















