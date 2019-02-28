import React from "react";
import ClassNames from "classnames";


import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select/Select";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
// import Radio from "@material-ui/core/Radio";

import {SelectBlockStyle} from "./SelectBlockStyle";
import InputLabel from "~/themes/bubbly/node_modules/@material-ui/core/InputLabel/InputLabel";
import MenuItem from "~/themes/bubbly/node_modules/@material-ui/core/MenuItem/MenuItem";
import FormControl from "~/themes/bubbly/node_modules/@material-ui/core/FormControl/FormControl";

export type SelectBlockProps = WithStyles<typeof SelectBlockStyle> & {
  id?: string,
  name?: string,
  outerLabelText?: string,
  innerLabelText: string,
  options: { label: string, value: string | number }[],
  value: (string | number)[],
  multiple?: boolean,
  onChange: (value: (string | number)[]) => void,
  error?: boolean,
  success?: boolean,
  fullWidth?: boolean,
  helpText: string,
}

let SelectIdCounter = 0;

export const SelectBlock = withStyles(SelectBlockStyle)((
  {
    classes,
    id = `input-${SelectIdCounter++}`,
    innerLabelText = "",
    outerLabelText = "",
    options,
    value,
    multiple,
    onChange,
    error,
    success,
    fullWidth,
    helpText,
  }
    : SelectBlockProps
) => {

  const selectBlockClasses = ClassNames({
    [classes.selectBlock]: true,
    [classes.selectBlockNoOuterLabel]: !outerLabelText,
    [classes.fullWidth]: fullWidth,
  });
  const labelClasses = ClassNames({
    [classes.label]: true,
    [classes.dangerColor]: error,
    [classes.successColor]: success,
  });
  const helpLabelClasses = ClassNames({
    [classes.helpLabel]: true,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });

  return (
    <div
      className={selectBlockClasses}
    >
      <FormControl
        fullWidth
        className={classes.selectFormControl}
      >
        <InputLabel
          htmlFor={id}
          className={labelClasses}
        >
          {outerLabelText}
        </InputLabel>
        <Select
          id={id}
          MenuProps={{
            className: classes.selectMenu
          }}
          classes={{
            select: classes.select
          }}
          multiple={multiple}
          value={value.length ? value : (outerLabelText ? [] : ["select-disabled"])}
          onChange={event => onChange(Array.isArray(event.target.value) ? event.target.value : [event.target.value])}
          inputProps={{ name, id }}
        >
          <MenuItem
            disabled
            value="select-disabled"
            classes={{
              root: classes.selectMenuItem
            }}
          >
            {innerLabelText}
          </MenuItem>
          {options.map((o,i) => (
            <MenuItem
              key={`${i}-${o.label}`}
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value={o.value}
            >
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormHelperText id={id + "-text"} className={helpLabelClasses}>
        {helpText || "\u00A0"}
      </FormHelperText>
    </div>
  );

});
