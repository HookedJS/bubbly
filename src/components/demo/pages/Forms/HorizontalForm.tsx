import React from "react";

import PasswordIcon from "@material-ui/icons/Security";
import EmailIcon from "@material-ui/icons/Email";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Button from "../../../modules/Buttons/Button";

import { CheckboxBlock } from "../../../modules/Form/CheckboxBlock";

import { HorizontalFormStyle } from "./HorizontalFormStyle";
import InputBlock from "../../../modules/Form/InputBlock";
import HorizontalBlock from "@bubbly/components/modules/Form/HorizontalBlock";
import { Link } from "~/themes/bubbly/node_modules/@material-ui/core";
import { EmailAddressRe, PasswordRe } from "~/core/utils/Validators";


export const HorizontalForm = withStyles(HorizontalFormStyle)((
  {
    classes,
    onSubmit,
    className,
    style,
  }
    : WithStyles<typeof HorizontalFormStyle> & {
    onSubmit: () => any,
    className?: string,
    style?: {},
  }
) => {



  // State

  const [showErrors, setShowErrors] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newsletter, setNewsletter] = React.useState(false);


  // Functions

  const emailIsValid = EmailAddressRe.test(email);
  const passwordIsValid = PasswordRe.test(email);

  const allValid = emailIsValid;

  const onSubmitLocal = () => {
    if (allValid) onSubmit();
    else {
      setShowErrors(true);
    }
  };

  return (
    <form className={className} style={style}>
      <HorizontalBlock label="Email*">
        <InputBlock
          type="text"
          onChange={val => setEmail(val)}
          value={email}
          fullWidth={true}
          Icon={EmailIcon}
          success={showErrors && emailIsValid}
          error={showErrors && !emailIsValid}
          helpText={showErrors ? !emailIsValid ? "Email must be 8 chars and include a number and special character." : "" : ""}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Password*">
        <InputBlock
          type="password"
          onChange={val => setPassword(val)}
          value={password}
          fullWidth={true}
          Icon={PasswordIcon}
          success={showErrors && passwordIsValid}
          error={showErrors && !passwordIsValid}
          helpText={showErrors ? "Password is required." : ""}
        />
      </HorizontalBlock>
      <HorizontalBlock>
        <CheckboxBlock
          onChange={setNewsletter}
          value={newsletter}
          label={<span>I agree to the <Link color="inherit" underline="always" href="#">terms of service</Link></span>}
          success={showErrors && newsletter}
          error={showErrors && !newsletter}
          errorText={showErrors ? "Checking is required." : ""}
          fullWidth={true}
        />
        <Button color="rose" onClick={onSubmitLocal} className={classes.registerButton}>
          Register
        </Button>
      </HorizontalBlock>
    </form>
  );

});

// RegisterForm.propTypes = {
//   classes: PropTypes.object.isRequired,
//   isValidCallback: PropTypes.func.isRequired,
// };

export default HorizontalForm;

