/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// core components
import Heading from "@bubbly/components/modules/Heading/Heading";
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";
import Card from "@bubbly/components/modules/Card/Card";
import CardBody from "@bubbly/components/modules/Card/CardBody";

import { IconsStyle } from "./IconsStyle";

export const Icons = withStyles(IconsStyle)((
  {
    ...props
  }
) => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Heading
          textAlign="center"
          title="Material Design Icons"
          category={
            <span>
              Handcrafted by our friends from{" "}
              <a target="_blank" href="https://design.google.com/icons/">
                Google
              </a>
            </span>
          }
        />
        <Card plain>
          <CardBody plain>
            <Hidden only={["sm", "xs"]} implementation="css">
              <iframe
                className={props.classes.iframe}
                src="https://material.io/icons/"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]} implementation="css">
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The icons are visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. Check the
                  <a
                    href="https://design.google.com/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material Icons
                  </a>
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
});

// Icons.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Icons;
