import { createStyles } from "@material-ui/core/styles";
import { primaryColor, primaryBoxShadow, dangerColor, successColor } from "@bubbly/MainStyles";

export const SelectBlockStyle = createStyles({
  selectBlock: {
    paddingBottom: 15
  },
  selectBlockNoOuterLabel: {
    marginTop: -24,
  },
  fullWidth: {
    width: "100%",
    marginRight: 0,
  },

  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: 400,
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#3C4858",
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent"
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)"
    },
    "& + input + svg": {
      transition: "all 300ms linear"
    }
  },
  selectFormControl: {
    margin: "0 0 10px 0 !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: "#D2D2D2 !important"
      },
      "&:after": {
        borderBottomColor: primaryColor + "!important"
      }
    }
  },
  label: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#3C4858 !important",
    top: "8px"
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box"
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit"
    },
    "& > div + div": {
      maxHeight: "266px !important"
    }
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: 400,
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: "#333",
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...primaryBoxShadow
    }
  },
  selectMenuItemSelected: {
    backgroundColor: primaryColor + "!important",
    color: "#FFFFFF"
  },
  selectMenuItemSelectedMultiple: {
    backgroundColor: "transparent !important",
    "&:hover": {
      backgroundColor: primaryColor + "!important",
      color: "#FFFFFF",
      ...primaryBoxShadow,
      "&:after": {
        color: "#FFFFFF"
      }
    },
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: 1,
      color: "#3c4858",
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
    }
  },
  selectPaper: {
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px"
  },

  helpLabel: {
    display: "block",
    // color: dangerColor,
    marginTop: -10,
    // marginBottom: -10,
    paddingTop: 4,
    fontSize: "0.75rem",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  },

  dangerColor: {
    color: dangerColor + "!important"
  },
  successColor: {
    color: successColor + "!important"
  },
});
