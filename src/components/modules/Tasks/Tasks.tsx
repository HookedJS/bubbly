import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import { TasksStyle } from "./TasksStyle";

const Tasks = withStyles(TasksStyle)((
  {
    classes,
    checkedIndexes,
    tasksIndexes,
    tasks
  }
  : WithStyles<typeof TasksStyle> & {
    checkedIndexes: number[],
    tasksIndexes: number[],
    tasks: React.ReactChild[],
  }
) => {
  const [checked, setChecked] = React.useState(checkedIndexes);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map(value => (
          <TableRow key={value} className={classes.tableRow}>
            <TableCell className={classes.tableCell}>
              <Checkbox
                checked={checked.includes(value)}
                tabIndex={-1}
                onClick={handleToggle(value)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            </TableCell>
            <TableCell className={classes.tableCell}>
              {tasks[value]}
            </TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id="tooltip-top"
                title="Edit Task"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Edit"
                  className={classes.tableActionButton}
                >
                  <Edit
                    className={
                      classes.tableActionButtonIcon + " " + classes.edit
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                id="tooltip-top-start"
                title="Remove"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Close
                    className={
                      classes.tableActionButtonIcon + " " + classes.close
                    }
                  />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

});

// Tasks.propTypes = {
//   classes: PropTypes.object.isRequired,
//   tasksIndexes: PropTypes.arrayOf(PropTypes.number),
//   checkedIndexes: PropTypes.arrayOf(PropTypes.number),
//   tasks: PropTypes.arrayOf(PropTypes.node)
// };

export default Tasks;
