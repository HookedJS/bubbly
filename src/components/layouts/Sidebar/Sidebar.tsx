import React from "react";
import cx from "classnames";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import {UseCssBreakPoint} from "~/core/hooks/UseCssBreakPoint";

import Header from "@bubbly/components/sections/HeaderSidebar/HeaderSidebar";
import Footer from "@bubbly/components/sections/Footer/Footer";
import SidebarComponent from "@bubbly/components/modules/Sidebar/Sidebar";

import { AppName, BubblySidebarNavLinks } from "~/var/config";

import { SidebarStyle } from "./SidebarStyle";
import { SidebarStyleRtl } from "./SidebarStyleRtl";

import image from "@bubbly/components/demo/assets/img/sidebar-2.jpg";
import logo from "@bubbly/components/demo/assets/img/logo-white.svg";

let rtlActiveDefault = window.location.href.includes("rtl");

const Sidebar = (
  {
    classes,
    children,
    ...rest
  }
  : WithStyles<typeof SidebarStyle> & {
    children: React.ReactNode,
  }
) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [rtlActive] = React.useState(rtlActiveDefault);
  UseCssBreakPoint(); // Will cause re-render on css breakpoint change
  let mainPanelRef: HTMLElement;

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(mainPanelRef, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
      return () => {
        ps.destroy();
      };
    }
    return () => null;
  });

  if (window.innerWidth >= 960 && mobileOpen) {
    setMobileOpen(false);
  }

  const mainPanel =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
      navigator.platform.indexOf("Win") > -1
    });

  return (
    <div className={classes.wrapper}>
      <SidebarComponent
        links={BubblySidebarNavLinks}
        logoText={AppName}
        logo={logo}
        image={image}
        handleDrawerToggle={() => setMobileOpen(!mobileOpen)}
        open={mobileOpen}
        color="blue"
        bgColor="black"
        miniActive={miniActive}
        rtlActive={rtlActive}
        {...rest}
      />
      <div className={mainPanel} ref={ref => {mainPanelRef = ref as HTMLElement}}>
        <Header
          sidebarMinimize={() => setMiniActive(!miniActive)}
          miniActive={miniActive}
          links={BubblySidebarNavLinks}
          handleDrawerToggle={() => setMobileOpen(!mobileOpen)}
          rtlActive={rtlActive}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>{children}</div>
        </div>
        <Footer fluid/>
      </div>
    </div>
  );

};

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(rtlActiveDefault ? SidebarStyleRtl : SidebarStyle)(Sidebar) as unknown as React.ComponentClass;
