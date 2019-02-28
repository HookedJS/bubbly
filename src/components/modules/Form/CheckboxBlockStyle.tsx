import { createStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  dangerColor,
  roseColor,
  grayColor, successColor
} from "@bubbly/MainStyles";

export const CheckboxBlockStyle = createStyles({
  checkboxBlock: {
    position: "relative",
    paddingBottom: 30,
    marginRight: 12,
  },
  fullWidth: {
    width: "100%",
    marginRight: 0,
  },
  inlineBlock: {
    display: "inline-table"
  },
  checkRoot: {
    padding: "0 14px"
  },
  radioRoot: {
    padding: "0 14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: 0,
    marginBottom: 18,
  },
  checked: {
    color: primaryColor + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: "#000000",
      opacity: 0.26,
      color: "#000000"
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
  dangerColor: {
    color: dangerColor
  },
  successColor: {
    color: successColor
  },
  helpLabel: {
    display: "block",
    // color: dangerColor,
    borderTop: "1px solid #ccc",
    marginTop: 4,
    // marginBottom: -26,
    paddingTop: 4,
    fontSize: "0.75rem",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  },
  helpLabelEmpty: {
    borderTop: "1px solid rgba(0,0,0,0)",
  },
  helpLabelRadio: {
    marginTop: -10,
  },
  radio: {
    color: primaryColor + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: grayColor,
    padding: "0",
    margin: "0 auto 20px",
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: roseColor,
      "& > span:first-child": {
        borderColor: roseColor
      }
    }
  },
  iconCheckboxChecked: {
    color: roseColor,
    "& > span:first-child": {
      borderColor: roseColor
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  statusIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
