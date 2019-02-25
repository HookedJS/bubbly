import React from "react";
import cx from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import {default as TableDefault} from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { TableStyle } from "./TableStyle";

type TableRowNormal = {
  kind?: "normal",
  color?: string,
  cols: (string | React.ReactChild)[],
}

type TableRowTotal = {
  kind: "total",
  color?: string,
  colspan: number, amount: string
}

type TableRowPurchase = {
  kind: "purchase",
  color?: string,
  colspan: number, col: {text: string, colspan: number}
}

type TableRow = TableRowNormal | TableRowTotal | TableRowPurchase;


const Table = withStyles(TableStyle)((
  {
    classes,
    tableHead = [],
    tableData = [],
    tableHeaderColor = "gray",
    hover = false,
    colorsColls = [],
    coloredColls = [],
    customCellClasses = [],
    customClassesForCells = [],
    striped = false,
    tableShopping,
    customHeadCellClasses = [],
    customHeadClassesForCells = [],
  }: WithStyles<typeof TableStyle> & {
    tableHead?: (string | React.ReactChild)[],
    tableData?: TableRow[],
    tableHeaderColor?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
    hover?: boolean,
    colorsColls?: string[],
    coloredColls?: number[],
    customCellClasses?: string[],
    customClassesForCells?: number[],
    striped?: boolean,
    tableShopping?: boolean,
    customHeadCellClasses?: string[],
    customHeadClassesForCells?: number[],
  }
) => {

  return (
    <div className={classes.tableResponsive}>
      <TableDefault className={classes.table}>
        {tableHead.length ? (
          <TableHead className={classes[tableHeaderColor]}>
            <TableRow className={classes.tableRow}>
              {tableHead.map((prop, key) => {
                const tableCellClasses =
                  classes.tableHeadCell +
                  " " +
                  classes.tableCell +
                  " " +
                  cx({
                    [customHeadCellClasses[
                      customHeadClassesForCells.indexOf(key)
                    ]]: customHeadClassesForCells.indexOf(key) !== -1,
                    [classes.tableShoppingHead]: tableShopping,
                    [classes.tableHeadFontSize]: !tableShopping
                  });
                return (
                  <TableCell className={tableCellClasses} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null} {/* end if tableHead !== undefined */}
        <TableBody>
          {tableData.map((prop, key) => {

            let rowColor = "";
            let rowColored = false;
            if (prop.color !== undefined) {
              rowColor = prop.color;
              rowColored = true;
            }

            const tableRowClasses = cx({
              [classes.tableRowHover]: hover,
              [classes[rowColor + "Row"]]: rowColored,
              [classes.tableStripedRow]: striped && key % 2 === 0
            });

            switch (prop.kind) {
              case "total": {
                return (
                  <TableRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.tableCellTotal}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableCellAmount
                      }
                    >
                      {prop.amount}
                    </TableCell>
                    {tableHead.length - (prop.colspan + 2) > 0 ? (
                      <TableCell
                        className={classes.tableCell}
                        colSpan={tableHead.length - (prop.colspan + 2)}
                      />
                    ) : null}
                  </TableRow>
                );
              }

              case "purchase": {
                return (
                  <TableRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.right}
                      colSpan={prop.col.colspan}
                    >
                      {prop.col.text}
                    </TableCell>
                  </TableRow>
                );
              }

              default: {
                return (
                  <TableRow
                    key={key}
                    hover={hover}
                    className={classes.tableRow + " " + tableRowClasses}
                  >
                    {prop.cols.map((prop2, key) => {
                      const tableCellClasses =
                        classes.tableCell +
                        " " +
                        cx({
                          [classes[colorsColls[coloredColls.indexOf(key)]]]:
                          coloredColls.indexOf(key) !== -1,
                          [customCellClasses[customClassesForCells.indexOf(key)]]:
                          customClassesForCells.indexOf(key) !== -1
                        });
                      return (
                        <TableCell className={tableCellClasses} key={key}>
                          {prop2}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }
            }


            // if (prop.kind === "total") {
            //   return (
            //     <TableRow key={key} hover={hover} className={tableRowClasses}>
            //       <TableCell
            //         className={classes.tableCell}
            //         colSpan={prop.colspan}
            //       />
            //       <TableCell
            //         className={classes.tableCell + " " + classes.tableCellTotal}
            //       >
            //         Total
            //       </TableCell>
            //       <TableCell
            //         className={
            //           classes.tableCell + " " + classes.tableCellAmount
            //         }
            //       >
            //         {prop.amount}
            //       </TableCell>
            //       {tableHead.length - (prop.colspan - 0 + 2) > 0 ? (
            //         <TableCell
            //           className={classes.tableCell}
            //           colSpan={tableHead.length - (prop.colspan - 0 + 2)}
            //         />
            //       ) : null}
            //     </TableRow>
            //   );
            // }
            //
            // if (prop.kind === "purchase") {
            //   return (
            //     <TableRow key={key} hover={hover} className={tableRowClasses}>
            //       <TableCell
            //         className={classes.tableCell}
            //         colSpan={prop.colspan}
            //       />
            //       <TableCell
            //         className={classes.tableCell + " " + classes.right}
            //         colSpan={prop.col.colspan}
            //       >
            //         {prop.col.text}
            //       </TableCell>
            //     </TableRow>
            //   );
            // }
            //
            // if (prop.kind === "normal") {
            //   return (
            //     <TableRow
            //       key={key}
            //       hover={hover}
            //       className={classes.tableRow + " " + tableRowClasses}
            //     >
            //       {prop.cols.map((prop2, key) => {
            //         const tableCellClasses =
            //           classes.tableCell +
            //           " " +
            //           cx({
            //             [classes[colorsColls[coloredColls.indexOf(key)]]]:
            //             coloredColls.indexOf(key) !== -1,
            //             [customCellClasses[customClassesForCells.indexOf(key)]]:
            //             customClassesForCells.indexOf(key) !== -1
            //           });
            //         return (
            //           <TableCell className={tableCellClasses} key={key}>
            //             {prop2}
            //           </TableCell>
            //         );
            //       })}
            //     </TableRow>
            //   );
            // }

          })}
        </TableBody>
      </TableDefault>
    </div>
  );
});

// Table.defaultProps = {
//   tableHeaderColor: "gray",
//   hover: false,
//   colorsColls: [],
//   coloredColls: [],
//   striped: false,
//   customCellClasses: [],
//   customClassesForCells: [],
//   customHeadCellClasses: [],
//   customHeadClassesForCells: []
// };

// Table.propTypes = {
//   classes: PropTypes.object.isRequired,
//   tableHeaderColor: PropTypes.oneOf([
//     "warning",
//     "primary",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   tableHead: PropTypes.arrayOf(PropTypes.string),
//   // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
//   tableData: PropTypes.array,
//   hover: PropTypes.bool,
//   coloredColls: PropTypes.arrayOf(PropTypes.number),
//   // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
//   colorsColls: PropTypes.array,
//   customCellClasses: PropTypes.arrayOf(PropTypes.string),
//   customClassesForCells: PropTypes.arrayOf(PropTypes.number),
//   customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
//   customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
//   striped: PropTypes.bool,
//   // this will cause some changes in font
//   tableShopping: PropTypes.bool
// };

export default Table;
