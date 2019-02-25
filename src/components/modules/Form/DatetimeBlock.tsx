/**
 * Unfortunetly, this does not use MaterialUi's Input component, so we lose some input styling.
 */
import React from "react";
import ClassNames from "classnames";

import Datetime, {DatetimepickerProps} from "react-datetime";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import { InputBlockStyle } from "./InputBlockStyle";
import InputLabel from "~/themes/bubbly/node_modules/@material-ui/core/InputLabel/InputLabel";

let InputIdCounter = 0;

export type DatetimeBlockProps = WithStyles<typeof InputBlockStyle> & {
  id?: string,
  value?: string,
  timeFormat?: boolean,
  error?: boolean,
  success?: boolean,
  white?: boolean,
  helpText?: string,
  label?: React.ReactNode,
  fullWidth?: boolean,
  onChange?: (value: string) => any,
  inputProps?: DatetimepickerProps["inputProps"],
  labelText?: string,
  labelClasses?: string,
  labelProps?: any,
  datetimeProps?: DatetimepickerProps,
};


export const DatetimeBlock = withStyles(InputBlockStyle)((
  {
    classes,
    id = `input-${InputIdCounter++}`,
    value = "",
    timeFormat,
    error,
    success,
    white,
    label,
    helpText = "",
    fullWidth = true,
    onChange = () => null,
    inputProps = {},
    labelText,
    labelClasses,
    labelProps = {},
    datetimeProps = {},
  }
    : DatetimeBlockProps
) => {

  // State


  // Classes

  const datetimeBlockClasses = ClassNames({
    [classes.inputBlock]: true,
    [classes.datetimeBlock]: true,
    [classes.fullWidth]: fullWidth,
  });
  const helpTextClasses = ClassNames({
    [classes.helpText]: true,
    [classes.danger]: error,
    [classes.success]: success && !error
  });
  const inputClasses = ClassNames({
    "form-control": true,
    [classes.datetimeInput]: true,
    [classes.whiteInput]: white,
  });


  // JSX

  return (
    <div className={datetimeBlockClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.datetimeLabel + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}

      <FormControl fullWidth={fullWidth}>

        <Datetime
          value={value}
          onChange={(val) => onChange(val as string)}
          inputProps={{id, className: inputClasses, ...inputProps}}
          {...datetimeProps}
        />
        <FormHelperText id={id + "-text"} className={helpTextClasses}>
          {helpText}
        </FormHelperText>
      </FormControl>
    </div>
  );
});

export default DatetimeBlock;
