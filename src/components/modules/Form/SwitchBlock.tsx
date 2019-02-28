import React from "react";
import ClassNames from "classnames";


import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
// import Radio from "@material-ui/core/Radio";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import {SwitchBlockStyle} from "./SwitchBlockStyle";

export type SwitchBlockProps = WithStyles<typeof SwitchBlockStyle> & {
  label?: React.ReactNode,
  value?: boolean,
  onChange: (value: boolean) => void,
  error?: boolean,
  success?: boolean,
  fullWidth?: boolean,
  helpText: string,
}

export const SwitchBlock = withStyles(SwitchBlockStyle)((
  {
    classes,
    label = "",
    value,
    onChange,
    error,
    success,
    fullWidth,
    helpText,
  }
    : SwitchBlockProps
) => {

  const switchBlockClasses = ClassNames({
    [classes.switchBlock]: true,
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
    [classes.helpLabelEmpty]: !helpText,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });

  return (
    <div
      className={switchBlockClasses}
    >
      <FormControlLabel
        control={
          <Switch
            checked={value}
            onChange={(event, checked) => onChange(checked)}
            // value="checkedA"
            classes={{
              switchBase: classes.switchBase,
              checked: classes.switchChecked,
              icon: classes.switchIcon,
              iconChecked: classes.switchIconChecked,
              bar: classes.switchBar
            }}
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
