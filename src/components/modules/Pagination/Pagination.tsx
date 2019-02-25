import React from "react";
import cx from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import { PaginationStyle } from "./PaginationStyle";

export const Pagination = withStyles(PaginationStyle)((
  {
    classes,
    pages,
    color = "primary",
    onClick,
  }
  : WithStyles<typeof PaginationStyle> & {
    pages: {
      active?: boolean,
      disabled?: boolean,
      text: number | "PREV" | "NEXT" | "..."
    }[],
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    onClick?: (key: number) => any,
  }
) => {
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = cx({
          [classes.paginationLink]: true,
          // @ts-ignore: Ignore missing signature
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {onClick !== undefined ? (
              <Button onClick={() => onClick(key)} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => console.log("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
});

// Pagination.defaultProps = {
//   color: "primary"
// };
//
// Pagination.propTypes = {
//   classes: PropTypes.object.isRequired,
//   pages: PropTypes.arrayOf(
//     PropTypes.shape({
//       active: PropTypes.bool,
//       disabled: PropTypes.bool,
//       text: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.oneOf(["PREV", "NEXT", "..."])
//       ]).isRequired,
//       onClick: PropTypes.func
//     })
//   ).isRequired,
//   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
// };

export default Pagination;
