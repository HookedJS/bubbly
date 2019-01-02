import React from "react";

// core components
import GridContainer from "@theme/components/Grid/GridContainer";
import GridItem from "@theme/components/Grid/GridItem";
import Heading from "@theme/components/Heading/Heading";
import Timeline from "@theme/components/Timeline/Timeline";
import Card from "@theme/components/Card/Card";
import CardBody from "@theme/components/Card/CardBody";

import {stories} from "@theme/demo/var/general";

class TimelinePage extends React.Component {
  render() {
    return (
      <div>
        <Heading title="Timeline" textAlign="center" />
        <GridContainer>
          <GridItem xs={12}>
            <Card plain>
              <CardBody plain>
                <Timeline stories={stories} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default TimelinePage;
