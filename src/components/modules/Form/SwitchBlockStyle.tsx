import { createStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../../MainStyles";

export const SwitchBlockStyle = createStyles({
  switchBlock: {
    position: "relative",
    marginRight: 12,
    paddingBottom: 30,
  },
  fullWidth: {
    width: "100%",
    marginRight: 0,
  },
  inlineBlock: {
    display: "inline-table",
  },
  switchBase: {
    color: primaryColor + "!important",
    height: 20,
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)",
    transform: "translateX(-4px)!important"
  },
  switchIconChecked: {
    borderColor: "#9c27b0",
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    // @ts-ignore: Typescript gets confused about a CSSProperty
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    }
  },

  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "#AAAAAA",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: 400,
    display: "inline-flex",
    transition: "0.3s ease all"
  },

  helpLabel: {
    display: "block",
    // color: dangerColor,
    borderTop: "1px solid #ccc",
    marginTop: 8,
    // marginBottom: -10,
    paddingTop: 4,
    fontSize: "0.75rem",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  },
  helpLabelEmpty: {
    borderTop: "1px solid rgba(0,0,0,0)",
  },

  statusIcon: {
    position: "absolute",
    top: 4,
    right: 0,
  },

  dangerColor: {
    color: dangerColor
  },
  successColor: {
    color: successColor
  },
});
