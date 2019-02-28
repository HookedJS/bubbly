import React from "react";
import TagsInput from "react-tagsinput";
import ClassNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import { TagsBlockStyle } from "./TagsBlockStyle";

export type TagsBlockProps = WithStyles<typeof TagsBlockStyle> & {
  tags: string[],
  onChange: (tags: string[]) => void
  error?: boolean,
  success?: boolean,
  fullWidth?: boolean,
  helpText: string,
};

export const TagsBlock = withStyles(TagsBlockStyle)((
  {
    classes,
    tags,
    onChange,
    error,
    success,
    fullWidth,
    helpText,
  }
    : TagsBlockProps
) => {

  const tagsBlockClasses = ClassNames({
    [classes.tagsBlock]: true,
    [classes.fullWidth]: fullWidth,
    [classes.inlineBlock]: !fullWidth
  });
  const helpLabelClasses = ClassNames({
    [classes.helpLabel]: true,
    [classes.helpLabelEmpty]: !helpText,
    [classes.dangerColor]: error,
    [classes.successColor]: success && !error
  });

  return (
    <div className={tagsBlockClasses}>
      <TagsInput
        className={"react-tagsinput " + classes.tagsInput}
        value={tags}
        onChange={onChange}
        tagProps={{ className: "react-tagsinput-tag info " + classes.tag }}
      />
      <FormHelperText className={helpLabelClasses}>
        {helpText || "\u00A0"}
      </FormHelperText>

      {fullWidth && error && <Close className={classes.statusIcon + " " + classes.dangerColor} />}
      {fullWidth && success && <Check className={classes.statusIcon + " " + classes.successColor} />}
    </div>
  );
});
