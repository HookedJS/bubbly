// ##############################
// // // Footer styles
// #############################

import {
  defaultFont,
  container,
  containerFluid,
  primaryColor
} from "@bubbly/MainStyles";

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from "@material-ui/core/styles";

export const FooterStyle = (theme: Theme) => createStyles({
  block: {},
  left: {
    // @ts-ignore: Typescript gets confused about a CSSProperty
    float: "left!important",
    display: "block"
  },
  right: {
    margin: "0",
    fontSize: "14px",
    // @ts-ignore: Typescript gets confused about a CSSProperty
    float: "right!important",
    padding: "15px"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid #e7e7e7",
    padding: "15px 0",
    ...defaultFont,
    zIndex: 4
  },
  // @ts-ignore: Typescript gets confused about a CSSProperty
  container: {
    zIndex: 3,
    ...container,
    position: "relative"
  },
  // @ts-ignore: Typescript gets confused about a CSSProperty
  containerFluid: {
    zIndex: 3,
    ...containerFluid,
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0",
    width: "auto"
  },
  whiteColor: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  }
});
