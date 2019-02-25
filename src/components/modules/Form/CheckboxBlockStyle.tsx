import { createStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  dangerColor,
  roseColor,
  grayColor, successColor
} from "@bubbly/MainStyles";

export const CheckboxBlockStyle = createStyles({
  checkboxBlock: {
    paddingBottom: 40,
  },
  radioBlock: {
    position: "relative",
    paddingBottom: 40,
  },
  fullWidth: {
    width: "100%",
  },
  inlineBlock: {
    display: "inline-block"
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
  colorDanger: {
    color: dangerColor
  },
  colorSuccess: {
    color: successColor
  },
  errorLabel: {
    display: "block",
    color: dangerColor,
    borderTop: "1px solid #ccc",
    marginTop: 4,
    marginBottom: -26,
    paddingTop: 4,
    fontSize: "0.75rem",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  },
  errorLabelRadio: {
    marginTop: -8,
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
  switchBase: {
    color: primaryColor + "!important"
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
  statusIcon: {
    float: "right",
  },
  statusIconRadio: {
    position: "absolute",
    top: 0,
    right: 0,
  }
});
