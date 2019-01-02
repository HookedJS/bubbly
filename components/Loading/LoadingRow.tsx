import * as React from "react";
import GridItem from "@theme/components/Grid/GridItem";
import Card from "@theme/components/Card/Card";
import CardBody from "@theme/components/Card/CardBody";
import GridContainer from "@theme/components/Grid/GridContainer";

export const LoadingRow = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardBody style={{textAlign: "center"}}>
            Loading...
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
