import React from "react";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";

// core components
import GridContainer from "../../../layouts/Grid/GridContainer";
import GridItem from "../../../layouts/Grid/GridItem";

// style for this view
import { ValidationFormsStyle } from "./ValidationFormsStyle";
import { StackedForm } from "./StackedForm";
import { HorizontalForm } from "./HorizontalForm";
import { CardBlock } from "../../../modules/Card/CardBlock";
import BigForm from "@bubbly/components/demo/pages/Forms/BigForm";

type ValidationFormsProps = WithStyles<typeof ValidationFormsStyle> & {}

const Forms = (
  {
    classes
  }: ValidationFormsProps
) => (
  <div className="forms">
    <GridContainer>
      <GridItem xs={12} sm={12} md={7} lg={6} xl={5}>
        <CardBlock
          Icon={MailOutline}
          title="Stacked Form with Validation"
        >
          <StackedForm onSubmit={() => null}/>
        </CardBlock>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xs={12}>
        <CardBlock
          Icon={MailOutline}
          title="Horizontal Form with Validation"
        >
          <HorizontalForm style={{paddingTop: 50}} onSubmit={() => null}/>
        </CardBlock>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xs={12}>
        <CardBlock
          title="Field Demos"
        >
          <BigForm style={{paddingTop: 50}}  onSubmit={() => null}/>
        </CardBlock>
      </GridItem>
    </GridContainer>
  </div>
);

export default withStyles(ValidationFormsStyle)(Forms);
