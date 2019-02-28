import { createStyles } from "@material-ui/core/styles";

export const HorizontalBlockStyle = createStyles({
  wrapper: {
    // paddingBottom: 30,
  },
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: 400,
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
});
