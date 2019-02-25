import { cardTitle } from "@bubbly/MainStyles";
import { createStyles } from "@material-ui/core/styles";

export const UserProfileStyles = createStyles({
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCategory: {
    marginTop: "10px",
    color: "#999999 !important",
    textAlign: "center"
  },
  description: {
    color: "#999999"
  },
  updateProfileButton: {
    float: "right"
  }
});
