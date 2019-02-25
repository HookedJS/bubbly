import React from "react";

// core components
import Wizard from "../../../modules/Wizard/Wizard";
import GridContainer from "../../../layouts/Grid/GridContainer";
import GridItem from "../../../layouts/Grid/GridItem";

import Step1 from "./Step1";

export const WizardView = () => {

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          steps={[
            { name: "About", Component: Step1},
            { name: "Account", Component: Step1},
            { name: "Address", Component: Step1}
          ]}
          title="Build Your Profile"
          subtitle="This information will let us know more about you."
          finishButtonClick={() => alert("You finished!")}
        />
      </GridItem>
    </GridContainer>
  );
};

export default WizardView;
