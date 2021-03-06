import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";
import Table from "@bubbly/components/modules/Table/Table";
import Card from "@bubbly/components/modules/Card/Card";
import CardHeader from "@bubbly/components/modules/Card/CardHeader";
import CardIcon from "@bubbly/components/modules/Card/CardIcon";
import CardBody from "@bubbly/components/modules/Card/CardBody";

import { cardTitle } from "@bubbly/MainStyles";

const style = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

function RegularTables({ ...props }) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Simple Table</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                {cols: ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]},
                {cols: ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"]},
                {cols: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"]},
                {cols: ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"]},
                {cols: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"]},
                {cols: ["Mason Porter", "Chile", "Gloucester", "$78,615"]},
              ]}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card plain>
          <CardHeader color="rose" icon plain>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Table on Plain Background
              <small> - Here is a subtitle for this table</small>
            </h4>
          </CardHeader>
          <CardBody plain>
            <Table
              hover={true}
              tableHead={["ID", "Name", "Salary", "Country", "City"]}
              tableData={[
                {cols: ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"]},
                {cols: ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"]},
                {cols: ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"]},
                {cols: [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ]},
                {cols: [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ]},
                {cols: ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]}
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Regular Table with Colors</h4>
          </CardHeader>
          <CardBody className={classes.customCardContentClass}>
            <Table
              hover={true}
              tableHead={["ID", "Name", "Salary", "Country", "City"]}
              tableData={[
                {
                  color: "success",
                  cols: [
                    "1",
                    "Dakota Rice (Success)",
                    "$36,738",
                    "Niger",
                    "Oud-Turnhout"
                  ]
                },
                {cols: ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"]},
                {
                  color: "info",
                  cols: [
                    "3",
                    "Sage Rodriguez (Info)",
                    "$56,142",
                    "Netherlands",
                    "Baileux"
                  ]
                },
                {cols: [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ]},
                {
                  color: "danger",
                  cols: [
                    "5",
                    "Doris Greene (Danger)",
                    "$63,542",
                    "Malawi",
                    "Feldkirchen in Kärnten"
                  ]
                },
                {cols: ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]},
                {
                  color: "warning",
                  cols: [
                    "7",
                    "Mike Chaney (Warning)",
                    "$38,735",
                    "Romania",
                    "Bucharest"
                  ]
                }
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(style)(RegularTables);
