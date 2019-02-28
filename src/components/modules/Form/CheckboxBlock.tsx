import React from "react";
import ClassNames from "classnames";

import { withStyles, WithStyles } from "@material-ui/core/styles";

// import { Checkbox as CheckboxOrig } from "~/themes/bubbly/node_modules/@material-ui/core";
import CheckboxOrig, { CheckboxProps } from "~/themes/bubbly/node_modules/@material-ui/core/Checkbox";

import { CheckboxBlockStyle } from "./CheckboxBlockStyle";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import { FormControlLabel } from "~/themes/bubbly/node_modules/@material-ui/core";
import FormHelperText from "~/themes/bubbly/node_modules/@material-ui/core/FormHelperText/FormHelperText";

export type CheckboxBlockProps = WithStyles<typeof CheckboxBlockStyle> & {
  fullWidth?: boolean,
  value?: boolean,
  onChange: (val: boolean) => any,
  label: React.ReactNode,
  success?: boolean,
  error?: boolean,
  helpText: string,
  checkboxProps?: Omit<CheckboxProps, "onClick">,
};

export const CheckboxBlock = withStyles(CheckboxBlockStyle)((
  {
    classes,
    fullWidth,
    value,
    onChange,
    label,
    success,
    error,
    checkboxProps = {},
    helpText,
  }
    : WithStyles<typeof CheckboxBlockStyle> & CheckboxBlockProps
) => {

  const checkboxBlockClasses = ClassNames({
    [classes.checkboxBlock]: true,
    [classes.fullWidth]: fullWidth,
    [classes.inlineBlock]: !fullWidth
  });
  const labelClasses = ClassNames({
    [classes.label]: true,
    [classes.dangerColor]: error,
    [classes.successColor]: success
  });
  const helpLabelClasses = ClassNames({
    [classes.helpLabel]: true,
    [classes.helpLabelEmpty]: !helpText,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });

  return (
    <div
      className={checkboxBlockClasses}
    >
      <FormControlLabel
        control={
          <CheckboxOrig
            checked={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
            checkedIcon={<Check className={classes.checkedIcon}/>}
            icon={<Check className={classes.uncheckedIcon}/>}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
            {...checkboxProps}
          />
        }
        classes={{
          label: labelClasses
        }}
        label={label}
      />

      <FormHelperText className={helpLabelClasses}>
        {helpText || "\u00A0"}
      </FormHelperText>

      {fullWidth && error && <Close className={classes.statusIcon + " " + classes.dangerColor} />}
      {fullWidth && success && <Check className={classes.statusIcon + " " + classes.successColor} />}

    </div>
  );
});
