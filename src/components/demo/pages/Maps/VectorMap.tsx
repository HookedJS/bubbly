/*eslint-disable*/
import React from "react";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// core components
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";
import Heading from "@bubbly/components/modules/Heading/Heading";
import Card from "@bubbly/components/modules/Card/Card";
import CardBody from "@bubbly/components/modules/Card/CardBody";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

function VectorMaps({ ...prop }) {
  return (
    <div>
      <Heading
        textAlign="center"
        title="World Map"
        category={
          <span>
            <a
              href="https://www.npmjs.com/package/react-jvectormap"
              target="_blank"
            >
              React wrapper component
            </a>{" "}
            of jQuery{" "}
            <a href="http://jvectormap.com/" target="_blank">
              jVector Map
            </a>{" "}
            pluging.
          </span>
        }
      />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <VectorMap
                map={"world_mill"}
                backgroundColor="transparent"
                zoomOnScroll={false}
                containerStyle={{
                  width: "100%",
                  height: "420px"
                }}
                containerClassName="map"
                regionStyle={{
                  initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 0
                  }
                }}
                series={{
                  regions: [
                    {
                      values: mapData,
                      scale: ["#AAAAAA", "#444444"],
                      normalizeFunction: "polynomial"
                    }
                  ]
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default VectorMaps;
