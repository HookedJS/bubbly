import React from "react";

import FaceIcon from "@material-ui/icons/Face";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import EmailIcon from "@material-ui/icons/Email";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core/styles";

import GridContainer from "../../../layouts/Grid/GridContainer";
import GridItem from "../../../layouts/Grid/GridItem";
import {StepComponentProps} from "../../../modules/Wizard/Wizard";
import PictureUpload from "../../../modules/Upload/PictureUpload";
import InputBlock from "../../../modules/Form/InputBlock";


const styles = createStyles({
  infoText: {
    textAlign: "center",
  }
});

export const Step1 = withStyles(styles)((
  {
    classes,
    isValidCallback,
    forceValidation,
  }
  : WithStyles<typeof styles> & StepComponentProps
) => {

  // TODO: Implement an app wide render debug text
  // console.log(`Step1 Re-Rendering`);



  // State

  const [firstNameState, setFirstNameState] = React.useState({value: "", isValid: false});
  const [lastNameState, setLastNameState] = React.useState({value: "", isValid: false});
  const [emailState, setEmailState] = React.useState({value: "", isValid: false});



  // Functions

  const checkAllValid = () => firstNameState.isValid && lastNameState.isValid && emailState.isValid;



  // Effects

  React.useEffect(() => {
    isValidCallback(checkAllValid());
  }, [firstNameState, lastNameState, emailState]);



  // JSX

  const firstNameInput = (
    <InputBlock
      name="firstName"
      labelText="First Name"
      onChangeWithValidation={({ value, isValid }) => {
        setFirstNameState({ value, isValid });
      }}
      value={firstNameState.value}
      fullWidth={true}
      validation={(value) => value.length >= 3}
      forceValidation={forceValidation}
      required={true}
      Icon={FaceIcon}
    />
  );

  const lastNameInput = (
    <InputBlock
      name="lastName"
      labelText="Last Name"
      onChangeWithValidation={({ value, isValid }) => {
        setLastNameState({ value, isValid });
      }}
      value={lastNameState.value}
      fullWidth={true}
      validation={(value) => value.length >= 3}
      forceValidation={forceValidation}
      required={true}
      Icon={RecordVoiceOverIcon}
    />
  );

  const emailInput = (
    <InputBlock
      name="email"
      labelText="Email"
      onChangeWithValidation={({ value, isValid }) => {
        setEmailState({ value, isValid });
      }}
      value={emailState.value}
      fullWidth={true}
      validation={(value: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)}
      forceValidation={forceValidation}
      required={true}
      Icon={EmailIcon}
    />
  );


  return (
    <div className="step">
      <h4 className={classes.infoText}>
        Let's start with the basic information (with validation)
      </h4>

      <GridContainer justify="center">
        <GridItem xs={12} sm={4}>
          <PictureUpload/>
        </GridItem>
        <GridItem xs={12} sm={6}>
          {firstNameInput}
          {lastNameInput}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          {emailInput}
        </GridItem>
      </GridContainer>
    </div>
  );

});

// Step1.propTypes = {
//   classes: PropTypes.object.isRequired,
//   isValidCallback: PropTypes.func.isRequired,
// };

export default Step1;
