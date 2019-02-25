import React from "react";

import EmailIcon from "@material-ui/icons/Email";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CheckboxBlock } from "../../../modules/Form/CheckboxBlock";

import { InputBlock } from "@bubbly/components/modules/Form/InputBlock";
import { HorizontalBlock } from "@bubbly/components/modules/Form/HorizontalBlock";
import { RadioBlock } from "@bubbly/components/modules/Form/RadioBlock";

import { BigFormStyle } from "./BigFormStyle";
import InputLabel from "~/themes/bubbly/node_modules/@material-ui/core/InputLabel/InputLabel";
import FormControl from "~/themes/bubbly/node_modules/@material-ui/core/FormControl/FormControl";
import Datetime from "~/themes/bubbly/node_modules/react-datetime";
import DatetimeBlock from "@bubbly/components/modules/Form/DatetimeBlock";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";

export const BigForm = withStyles(BigFormStyle)((
  {
    classes,
    onSubmit,
    className,
    style
  }
    : WithStyles<typeof BigFormStyle> & {
    onSubmit: () => any,
    className?: string,
    style?: {},
  }
) => {

  const [radio1, setRadio1] = React.useState(null);
  const [radio2, setRadio2] = React.useState(null);
  const [radio3, setRadio3] = React.useState(null);

  // State

  return (
    <form className={className} style={style}>
      <HorizontalBlock label="With help text">
        <InputBlock
          type="text"
          helpText="This is help text."
          fullWidth={true}
        />
      </HorizontalBlock>
      <HorizontalBlock label="With placeholder">
        <InputBlock
          type="text"
          fullWidth={true}
          inputProps={{ placeholder: "Placeholder" }}
        />
      </HorizontalBlock>
      <HorizontalBlock label="With Icon">
        <InputBlock
          type="text"
          fullWidth={true}
          Icon={EmailIcon}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Disabled">
        <InputBlock
          type="text"
          fullWidth={true}
          inputProps={{ disabled: true }}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Checkboxes">
        <div>
          <CheckboxBlock
            onChange={() => null}
            value={true}
            label="Checkbox"
            errorText="Error text"
          />
          <CheckboxBlock
            onChange={() => null}
            value={true}
            label="Checkbox"
            errorText="Error text"
          />
        </div>
      </HorizontalBlock>
      <HorizontalBlock label="Radios">
        <div>
          <RadioBlock
            onChange={val => setRadio1(val)}
            value={radio1}
            options={[
              { label: "Option 1", value: 1 },
              { label: "Option 2", value: 2 }
            ]}
            errorText="Error text"
          />
          <RadioBlock
            onChange={val => setRadio2(val)}
            value={radio2}
            options={[
              { label: "Option a", value: 1 },
              { label: "Option b", value: 2 }
            ]}
            errorText="Error text"
          />
        </div>
        <RadioBlock
          onChange={val => setRadio3(val)}
          value={radio3}
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 }
          ]}
          fullWidth={true}
          errorText="Error text"
        />
      </HorizontalBlock>
      <HorizontalBlock label="Dates">
        <GridContainer>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="DateTime"
              inputProps={{ placeholder: "(click to pick date and time)" }}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="Date"
              datetimeProps={{timeFormat:false}}
              inputProps={{ placeholder: "(click to pick date)" }}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="Time"
              datetimeProps={{dateFormat:false}}
              inputProps={{ placeholder: "(click to pick time)" }}
            />
          </GridItem>
        </GridContainer>
      </HorizontalBlock>
    </form>
  );

});

// RegisterForm.propTypes = {
//   classes: PropTypes.object.isRequired,
//   isValidCallback: PropTypes.func.isRequired,
// };

export default BigForm;

