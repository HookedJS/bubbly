import React from "react";
import ClassNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";

import Button, { ButtonPropsExt } from "@bubbly/components/modules/Buttons/Button";

import { DropdownStyle } from "./DropdownStyle";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const Dropdown = withStyles(DropdownStyle)((
  {
    classes,
    ref,
    onClick,
    buttonText,
    ButtonIcon,
    dropdownList,
    buttonProps,
    dropup = false,
    dropdownHeader,
    caret = true,
    hoverColor = "primary",
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  }: WithStyles<typeof DropdownStyle> & {
    ref?: HTMLElement | string,
    // children: React.ReactNode,
    // className?: string,
    onClick?: (param: any) => any,
    buttonText?: React.ReactNode,
    ButtonIcon?: React.ComponentClass<SvgIconProps> | any,
    dropdownList: { divider?: boolean, multi?: boolean, content?: React.ReactChild }[],
    buttonProps?: ButtonPropsExt,
    dropup?: boolean,
    dropdownHeader?: React.ReactNode,
    caret?: boolean,
    hoverColor?: "warning" | "success" | "danger" | "info" | "primary" | "rose",
    dropPlacement?: "bottom" | "top" | "right" | "left" | "bottom-start" | "bottom-end" | "top-start" | "top-end" | "right-start" | "right-end" | "left-start" | "left-end",
    rtlActive?: boolean,
    noLiPadding?: boolean,
    innerDropDown?: boolean,
    navDropdown?: boolean,
  }
) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // let anchorEl: null | HTMLElement | ReferenceObject | ((element: HTMLElement) => HTMLElement) = null;

  const handleCloseMenu = (param: any) => {
    setOpen(false);
    if (onClick) onClick(param);
  };

  const caretClasses = ClassNames({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !open,
    [classes.caretActive]: open && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = ClassNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  const dropdownMenu = (
    <MenuList role="menu" className={classes.menuList}>
      {dropdownHeader !== undefined ? (
        <MenuItem
          onClick={() => handleCloseMenu(dropdownHeader)}
          className={classes.dropdownHeader}
        >
          {dropdownHeader}
        </MenuItem>
      ) : null}
      {dropdownList.map((prop, key) => {

        if (prop.divider) {
          return (
            <Divider
              key={key}
              onClick={() => handleCloseMenu("divider")}
              className={classes.dropdownDividerItem}
            />
          );
        }

        if (prop.multi) {
          return (
            <MenuItem
              key={key}
              className={dropdownItem}
              style={{ overflow: "visible", padding: 0 }}
            >
              {prop.content}
            </MenuItem>
          );
        }

        return (
          <MenuItem
            key={key}
            onClick={() => handleCloseMenu(prop)}
            className={dropdownItem}
          >
            {prop.content}
          </MenuItem>
        );
      })}
    </MenuList>
  );


  return (
    <div className={innerDropDown ? classes.innerManager : classes.manager}>
      <div
        className={buttonText !== undefined ? "" : classes.target}
      >
        <Button
          aria-label="Notifications"
          aria-owns={open ? "menu-list" : undefined}
          aria-haspopup="true"
          // buttonRef={node => {anchorEl = node;}} // Doesn't work with hooks and Popper
          {...buttonProps}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setOpen(!open);
          }}
        >
          {ButtonIcon !== undefined ? (
            <ButtonIcon className={classes.buttonIcon}/>
          ) : null}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses}/> : null}
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={dropPlacement}
        className={ClassNames({
          [classes.popperClose]: !open,
          [classes.popperResponsive]: true,
          [classes.popperNav]: open && navDropdown
        })}
      >
        {({ TransitionProps, placement }) => (
          // @ts-ignore: ignore undeclared id attribute
          <Grow
            in={open}
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              {innerDropDown ? (
                dropdownMenu
              ) : (
                <ClickAwayListener
                  onClickAway={(event: React.ChangeEvent<{}>): void => {
                    // @ts-ignore: Temporary - seems to be a sloppy comparison
                    if (anchorEl.contains(event.target)) return;
                    setOpen(false);
                  }}
                >
                  {dropdownMenu}
                </ClickAwayListener>
              )}
            </Paper>
          </Grow>
        )}
      </Popper>

    </div>
  );

});

// Dropdown.defaultProps = {
//   caret: true,
//   dropup: false,
//   hoverColor: "primary"
// };
//
// Dropdown.propTypes = {
//   classes: PropTypes.object.isRequired,
//   hoverColor: PropTypes.oneOf([
//     "dark",
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose"
//   ]),
//   buttonText: PropTypes.node,
//   ButtonIcon: PropTypes.func,
//   dropdownList: PropTypes.array,
//   buttonProps: PropTypes.object,
//   dropup: PropTypes.bool,
//   dropdownHeader: PropTypes.node,
//   rtlActive: PropTypes.bool,
//   caret: PropTypes.bool,
//   dropPlacement: PropTypes.oneOf([
//     "bottom",
//     "top",
//     "right",
//     "left",
//     "bottom-start",
//     "bottom-end",
//     "top-start",
//     "top-end",
//     "right-start",
//     "right-end",
//     "left-start",
//     "left-end"
//   ]),
//   noLiPadding: PropTypes.bool,
//   innerDropDown: PropTypes.bool,
//   navDropdown: PropTypes.bool,
//   // This is a function that returns the clicked menu item
//   onClick: PropTypes.func
// };

export default Dropdown;
