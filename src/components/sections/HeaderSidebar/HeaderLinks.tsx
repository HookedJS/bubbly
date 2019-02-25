import React from "react";
import ClassNames from "classnames";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import InputBlock from "@bubbly/components/modules/Form/InputBlock";
import Button from "../../modules/Buttons/Button";

import { HeaderLinksStyle } from "./HeaderLinksStyle";

const HeaderLinks = withStyles(HeaderLinksStyle)((
  {
    classes,
    rtlActive
  }
  : WithStyles<typeof HeaderLinksStyle> & {
    rtlActive: boolean,
  }
) => {

  const [open, setOpen] = React.useState(false);
  let anchorEl: HTMLButtonElement | null = null;

  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    ClassNames({
      [classes.searchRTL]: rtlActive
    });
  const dropdownItem = ClassNames(
    classes.dropdownItem,
    classes.primaryHover,
    { [classes.dropdownItemRTL]: rtlActive }
  );
  const wrapper = ClassNames({
    [classes.wrapperRTL]: rtlActive
  });
  const managerClasses = ClassNames({
    [classes.managerClasses]: true
  });

  return (
    <div className={wrapper}>
      <InputBlock
        rtlActive={rtlActive}
        formControlProps={{
          className: classes.top + " " + classes.search
        }}
        inputProps={{
          placeholder: rtlActive ? "بحث" : "Search",
          inputProps: {
            "aria-label": rtlActive ? "بحث" : "Search",
            className: classes.searchInput
          }
        }}
      />
      <Button
        // @ts-ignore: Button color declaration is weak
        color="white"
        aria-label="edit"
        justIcon
        round
        className={searchButton}
      >
        <Search
          className={classes.headerLinksSvg + " " + classes.searchIcon}
        />
      </Button>
      <Button
        // @ts-ignore: Button color declaration is weak
        color="transparent"
        simple
        aria-label="Dashboard"
        justIcon
        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
        muiClasses={{
          label: rtlActive ? classes.labelRTL : ""
        }}
      >
        <Dashboard
          className={
            classes.headerLinksSvg +
            " " +
            (rtlActive
              ? classes.links + " " + classes.linksRTL
              : classes.links)
          }
        />
        <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? "لوحة القيادة" : "Dashboard"}
            </span>
        </Hidden>
      </Button>
      <div className={managerClasses}>
        <Button
          // @ts-ignore: Button color declaration is weak
          color="transparent"
          justIcon
          aria-label="Notifications"
          aria-owns={open ? "menu-list" : undefined}
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
          buttonRef={(node: HTMLButtonElement) => {
            anchorEl = node;
          }}
        >
          <Notifications
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <span className={classes.notifications}>5</span>
          <Hidden mdUp implementation="css">
              <span onClick={() => setOpen(!open)} className={classes.linkText}>
                {rtlActive ? "إعلام" : "Notification"}
              </span>
          </Hidden>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorEl}
          transition
          disablePortal
          placement="bottom"
          className={ClassNames({
            [classes.popperClose]: !open,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true
          })}
        >
          {({ TransitionProps, placement }) => (
            // @ts-ignore: ignore undeclared id attribute
            <Grow
              {...TransitionProps}
              id="menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={() => setOpen(false)}
                      className={dropdownItem}
                    >
                      {rtlActive
                        ? "إجلاء أوزار الأسيوي حين بل, كما"
                        : "Mike John responded to your email"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOpen(false)}
                      className={dropdownItem}
                    >
                      {rtlActive
                        ? "شعار إعلان الأرضية قد ذلك"
                        : "You have 5 new tasks"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOpen(false)}
                      className={dropdownItem}
                    >
                      {rtlActive
                        ? "ثمّة الخاصّة و على. مع جيما"
                        : "You're now friend with Andrew"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOpen(false)}
                      className={dropdownItem}
                    >
                      {rtlActive ? "قد علاقة" : "Another Notification"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOpen(false)}
                      className={dropdownItem}
                    >
                      {rtlActive ? "قد فاتّبع" : "Another One"}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <Button
        // @ts-ignore: Button color declaration is weak
        color="transparent"
        aria-label="Person"
        justIcon
        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
        muiClasses={{
          label: rtlActive ? classes.labelRTL : ""
        }}
      >
        <Person
          className={
            classes.headerLinksSvg +
            " " +
            (rtlActive
              ? classes.links + " " + classes.linksRTL
              : classes.links)
          }
        />
        <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? "الملف الشخصي" : "Profile"}
            </span>
        </Hidden>
      </Button>
    </div>
  );

});

// HeaderLinks.propTypes = {
//   classes: PropTypes.object.isRequired,
//   rtlActive: PropTypes.bool
// };

export default HeaderLinks;
