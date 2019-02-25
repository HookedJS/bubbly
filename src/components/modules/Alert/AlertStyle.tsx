// ##############################
// // // SweetAlert view styles
// #############################
import { createStyles } from "@material-ui/core/styles";
import { ButtonStyle } from "@bubbly/components/modules/Buttons/ButtonStyle";

export const AlertStyle = createStyles({
  cardTitle: {
    marginTop: "0",
    marginBottom: "3px",
    color: "#3C4858",
    fontSize: "18px"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  ...ButtonStyle
});
