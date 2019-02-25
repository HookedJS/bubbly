// ##############################
// // // ValidationForms view styles
// #############################

import { createStyles } from "@material-ui/core/styles";
import { cardTitle, dangerColor } from "@bubbly/MainStyles";

export const CardBlockStyle = createStyles({
  cardIconTitle: {
    ...cardTitle,
    color: "#FFFFFF"
  },
  cardTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  formCategory: {
    marginBottom: "0",
    color: "#999999",
    fontSize: "14px",
    padding: "10px 0 10px"
  },
  center: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  registerButton: {
    float: "right"
  },
  danger: {
    color: dangerColor + "!important"
  }
});
