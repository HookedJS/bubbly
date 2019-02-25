import { createStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../../MainStyles";

export const InputBlockStyle = createStyles({
  inputBlock: {
    paddingBottom: 14,
  },
  inputBlockNoLabel: {
    paddingBottom: 6,
  },
  fullWidth: {
    width: "100%",
  },
  danger: {
    color: dangerColor + "!important"
  },
  success: {
    color: successColor + "!important"
  },
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  labelRootSuccess: {
    color: successColor + " !important"
  },
  inputRoot: {
    paddingTop: "27px",
    position: "relative",
    verticalAlign: "unset",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  inputRootNoLabel: {
    width: "100%"
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      backgroundColor: "#FFFFFF"
    },
    "&:after": {
      backgroundColor: "#FFFFFF"
    }
  },
  input: {
    color: "#495057",
    // @ts-ignore: Typescript gets confused about a CSSProperty
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  inputNoLabel: {
    padding: "0 0 7px"
  },
  whiteInput: {
    // @ts-ignore: Typescript gets confused about a CSSProperty
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  },
  helpText: {
    marginTop: 6,
    marginBottom: -2,
  },
  inputAdornment: {},
  inputAdornmentNoLabel: {
    marginBottom: 7,
    color: "#495057",
  },
  datetimeBlock: {
    // marginTop: -5,
  },
  datetimeLabel: {

  },
  datetimeInput: {
    color: "#495057 !important",
    // @ts-ignore: Typescript gets confused about a CSSProperty
    "&,&::placeholder": {
      fontSize: "14px !important",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400 !important",
      lineHeight: "1.42857 !important",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    },
    padding: "0 0 0 !important",
  }
});
