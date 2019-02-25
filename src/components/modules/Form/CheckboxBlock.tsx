import React from "react";
import ClassNames from "classnames";

import { withStyles, WithStyles } from "@material-ui/core/styles";

// import { Checkbox as CheckboxOrig } from "~/themes/bubbly/node_modules/@material-ui/core";
import CheckboxOrig, { CheckboxProps } from "~/themes/bubbly/node_modules/@material-ui/core/Checkbox";

import { CheckboxBlockStyle } from "./CheckboxBlockStyle";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import { FormControlLabel } from "~/themes/bubbly/node_modules/@material-ui/core";

export type CheckboxBlockProps = WithStyles<typeof CheckboxBlockStyle> & {
  fullWidth?: boolean,
  value?: boolean,
  onChange: (val: boolean) => any,
  label: React.ReactNode,
  success?: boolean,
  error?: boolean,
  errorText: string,
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
    errorText,
  }
    : WithStyles<typeof CheckboxBlockStyle> & CheckboxBlockProps
) => {

  return (
    <div
      className={ClassNames({
        [classes.checkboxBlock]: true,
        [classes.fullWidth]: fullWidth,
        [classes.inlineBlock]: !fullWidth
      })}
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
          label: ClassNames({
            [classes.label]: true,
            [classes.colorDanger]: error,
            [classes.colorSuccess]: success
          })
        }}
        label={label}
      />
      {error && (
        <React.Fragment>
          <Close className={classes.statusIcon + " " + classes.colorDanger} />
          <label className={classes.errorLabel}>{errorText}</label>
        </React.Fragment>
      )}
      {success && <Check className={classes.statusIcon + " " + classes.colorSuccess} />}
    </div>
  );
});

export default CheckboxBlock;
