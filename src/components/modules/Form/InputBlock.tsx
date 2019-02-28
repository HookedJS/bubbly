import React from "react";
import ClassNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input, { InputProps } from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import { InputBlockStyle } from "./InputBlockStyle";

let InputIdCounter = 0;

export type InputBlockProps = WithStyles<typeof InputBlockStyle> & {
  id?: string,
  type?: "text" | "password" | "email" | "phone" | "number"
  value?: string,
  error?: boolean,
  success?: boolean,
  white?: boolean,
  helpText?: string,
  fullWidth?: boolean,
  Icon?: React.ComponentClass<SvgIconProps> | any,
  iconPosition?: "end" | "start",
  onChange?: (value: string) => any,
  inputProps?: InputProps,
  labelText?: string,
  labelClasses?: string,
  labelProps?: any,
};

export const InputBlock = withStyles(InputBlockStyle)((
  {
    classes,
    id = `input-${InputIdCounter++}`,
    type = "text",
    value = "",
    error,
    success,
    white,
    helpText = "",
    fullWidth = true,
    Icon,
    iconPosition = "end",
    onChange = () => null,
    inputProps = {},
    labelText,
    labelClasses,
    labelProps = {}
  }
    : InputBlockProps
) => {

  // State


  // Classes

  const inputBlockClasses = ClassNames({
    [classes.inputBlock]: true,
    [classes.inputBlockNoLabel]: !labelText,
    [classes.fullWidth]: fullWidth,
  });
  const labelClassesLocal = ClassNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = ClassNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline as string]: true,
    [classes.whiteUnderline]: white
  });
  const inputRootClasses = ClassNames({
    [classes.inputRoot]: labelText,
    [classes.inputRootNoLabel]: !labelText,
  });
  const inputClasses = ClassNames({
    [classes.input as string]: true,
    [classes.whiteInput]: white,
    [classes.inputNoLabel]: !labelText,
  });
  const helpTextClasses = ClassNames({
    [classes.helpText]: true,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });
  const inputAdornmentClasses = ClassNames({
    [classes.inputAdornment]: true,
    [classes.inputAdornmentNoLabel]: !labelText
  });


  // JSX
  if (Icon) {
    inputProps.endAdornment = (
      <InputAdornment position={iconPosition} className={inputAdornmentClasses}>
        <Icon className={classes.inputAdornmentIcon}/>
      </InputAdornment>
    );
  }

  if (error) {
    inputProps.endAdornment = (
      <InputAdornment position={iconPosition} className={inputAdornmentClasses}>
        <Close className={classes.dangerColor}/>
      </InputAdornment>
    );
  }

  if (success) {
    inputProps.endAdornment = (
      <InputAdornment position={iconPosition} className={inputAdornmentClasses}>
        <Check className={classes.successColor}/>
      </InputAdornment>
    );
  }

  return (
    <div className={inputBlockClasses}>
      <div className={classes.inputBackground}/>
      <FormControl fullWidth={fullWidth}>
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClassesLocal + " " + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            input: inputClasses,
            root: inputRootClasses,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          id={id}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
          type={type}
          {...inputProps}
        />
        <FormHelperText id={id + "-text"} className={helpTextClasses}>
          {helpText || "\u00A0"}
        </FormHelperText>
      </FormControl>
    </div>
  );
});

export default InputBlock;
