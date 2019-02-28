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
import FormHelperText from "~/themes/bubbly/node_modules/@material-ui/core/FormHelperText/FormHelperText";

export type RadioBlockProps = WithStyles<typeof CheckboxBlockStyle> & {
  options: { label: string, value: any }[],
  value: any,
  onChange: (value: any) => any,
  error?: boolean,
  success?: boolean,
  fullWidth?: boolean,
  helpText: string,
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
    helpText = "",
  }
    : RadioBlockProps
) => {

  const radioBlockClasses = ClassNames({
    [classes.checkboxBlock]: true,
    [classes.fullWidth]: fullWidth,
    [classes.inlineBlock]: !fullWidth
  });
  const labelClasses = ClassNames({
    [classes.label]: true,
    [classes.dangerColor]: error,
    [classes.successColor]: success,
  });
  const helpLabelClasses = ClassNames({
    [classes.helpLabel]: true,
    [classes.helpLabelRadio]: true,
    [classes.helpLabelEmpty]: !helpText,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });

  return (
    <div
      className={radioBlockClasses}
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
              label: labelClasses
            }}
            label={o.label}
          />
        </div>
      ))}

      <FormHelperText className={helpLabelClasses}>
        {helpText || "\u00A0"}
      </FormHelperText>

      {fullWidth && error && <Close className={classes.statusIcon + " " + classes.dangerColor} />}
      {fullWidth && success && <Check className={classes.statusIcon + " " + classes.successColor} />}
    </div>
  );

});
