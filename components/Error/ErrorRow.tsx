import * as React from "react";
import {Link} from "react-router-dom";
import GridItem from "@theme/components/Grid/GridItem";
import Card from "@theme/components/Card/Card";
import CardBody from "@theme/components/Card/CardBody";
import GridContainer from "@theme/components/Grid/GridContainer";

export const ErrorRow = ({title, content}: {title?: string; content: string}) => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardBody style={{textAlign: "center"}}>
            {content}
            {title && <h2>{title}</h2>}
            <p>
              <Link to="/" className="btn btn-primary">
                Want to report this?
              </Link>
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
export default ErrorRow;
