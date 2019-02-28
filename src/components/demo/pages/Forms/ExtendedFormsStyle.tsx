// ##############################
// // // ExtendedForms view styles
// #############################

import { cardTitle } from "@bubbly/MainStyles";
import { SelectBlockStyle } from "@bubbly/components/modules/Form/SelectBlockStyle";
import { CheckboxBlockStyle } from "@bubbly/components/modules/Form/CheckboxBlockStyle";

export const ExtendedFormsStyle = {
  ...CheckboxBlockStyle,
  ...SelectBlockStyle,
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  },
  mrAuto: {
    marginRight: "auto"
  },
  mlAuto: {
    marginLeft: "auto"
  }
};
