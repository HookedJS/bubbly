import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import {AlertStyle} from "./AlertStyle";

export const Alert = withStyles(AlertStyle)((
  {
    classes ,
    title,
    body,
    autoClose,
    showConfirm,
    onConfirm = () => null,
    onCancel = () => null,
  }
  : WithStyles<typeof AlertStyle> & {
    title?: string,
    body?: React.ReactChild,
    autoClose?: number,
    showConfirm?: boolean,
    onConfirm?: () => any,
    onCancel?: () => any,

  }

) => {
  if (autoClose) setTimeout(() => onConfirm(), autoClose*1000);

  return (
    <SweetAlert
      style={{ display: "block", marginTop: "-100px" }}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      showConfirm={showConfirm}
    >
      {body}
      {autoClose && `I will close in ${autoClose} seconds.`}
    </SweetAlert>
  )
});

export default Alert;
