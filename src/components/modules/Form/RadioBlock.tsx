import React from "react";
import ClassNames from "classnames";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";


import { CheckboxBlockStyle } from "./CheckboxBlockStyle";

export type RadioBlockProps = WithStyles<typeof CheckboxBlockStyle> & {
  options: { label: string, value: any }[],
  value?: any | null,
  onChange: (value: any) => any,
  error?: boolean,
  success?: boolean,
  fullWidth?: boolean,
  errorText: string,
}

export const RadioBlock = withStyles(CheckboxBlockStyle)((
  {
    classes,
    options,
    value,
    onChange,
    error,
    success,
    fullWidth,
    errorText,
  }
    : RadioBlockProps
) => {

  return (
    <div
      className={ClassNames({
        [classes.radioBlock]: true,
        [classes.fullWidth]: fullWidth,
        [classes.inlineBlock]: !fullWidth
      })}
    >
      {options.map((o, i) => (
        <div
          className={classes.checkboxAndRadio}
          key={i}
        >
          <FormControlLabel
            control={
              <Radio
                checked={value === o.value}
                onChange={() => onChange(o.value)}
                // value={o.value}
                aria-label={o.label}
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord
                    className={classes.radioChecked}
                  />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: ClassNames({
                [classes.label]: true,
                [classes.colorDanger]: error,
                [classes.colorSuccess]: success,
              })
            }}
            label={o.label}
          />
        </div>
      ))}
      {error && (
        <React.Fragment>
          <Close className={classes.statusIconRadio + " " + classes.colorDanger} />
          <label className={classes.errorLabel + " " + classes.errorLabelRadio}>{errorText}</label>
        </React.Fragment>
      )}
      {success && <Check className={classes.statusIconRadio + " " + classes.colorSuccess} />}
    </div>
  );

});

export default RadioBlock;
