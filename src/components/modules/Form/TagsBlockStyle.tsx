import React from "react";
import { createStyles } from "~/themes/bubbly/node_modules/@material-ui/core";
import { dangerColor, successColor } from "@bubbly/MainStyles";

export const TagsBlockStyle = createStyles({
  tagsBlock: {
    position: "relative",
    padding: "0 0 30px",
  },
  tagsInput: {
    padding: 0,
  },
  tag: {
    margin: "0 3px 0 0",
    // padding: "0"
  },

  fullWidth: {
    width: "100%",
    marginRight: 0,
  },
  inlineBlock: {
    display: "inline-table",
  },

  helpLabel: {
    display: "block",
    // color: dangerColor,
    borderTop: "1px solid #ccc",
    marginTop: 0,
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
    top: 6,
    right: 0,
  },

  dangerColor: {
    color: dangerColor + "!important"
  },
  successColor: {
    color: successColor + "!important"
  },
});
