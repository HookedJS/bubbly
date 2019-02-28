import React from "react";

import EmailIcon from "@material-ui/icons/Email";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { CheckboxBlock } from "../../../modules/Form/CheckboxBlock";

import { InputBlock } from "@bubbly/components/modules/Form/InputBlock";
import { HorizontalBlock } from "@bubbly/components/modules/Form/HorizontalBlock";
import { RadioBlock } from "@bubbly/components/modules/Form/RadioBlock";

import { DatetimeBlock } from "@bubbly/components/modules/Form/DatetimeBlock";
import { GridItem } from "@bubbly/components/layouts/Grid/GridItem";
import { GridContainer } from "@bubbly/components/layouts/Grid/GridContainer";
import {Button} from "@bubbly/components/modules/Buttons/Button";
import {SwitchBlock} from "@bubbly/components/modules/Form/SwitchBlock";


import { BigFormStyle } from "./BigFormStyle";
import { TagsBlock } from "@bubbly/components/modules/Form/TagsBlock";
import { SelectBlock } from "@bubbly/components/modules/Form/SelectBlock";


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

  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [radio1, setRadio1] = React.useState(null);
  const [radio2, setRadio2] = React.useState(null);
  const [radio3, setRadio3] = React.useState(null);
  const [select1, setSelect1] = React.useState<number[]>([]);
  const [select2, setSelect2] = React.useState<number[]>([]);

  // State

  return (
    <form className={className} style={style}>
      <HorizontalBlock label="With help text">
        <InputBlock
          type="text"
          helpText="This is help text."
          fullWidth={true}
          error={error}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="With placeholder">
        <InputBlock
          type="text"
          fullWidth={true}
          inputProps={{ placeholder: "Placeholder" }}
          helpText={error ? "Help text" : ""}
          error={error}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="With Icon">
        <InputBlock
          type="text"
          fullWidth={true}
          Icon={EmailIcon}
          helpText={error ? "Help text" : ""}
          error={error}
          success={success}
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
            helpText="Help text"
            error={error}
            success={success}
          />
          <CheckboxBlock
            onChange={() => null}
            value={true}
            label="Checkbox"
            helpText={error ? "Help text" : ""}
            error={error}
            success={success}
          />
        </div>
        <CheckboxBlock
          onChange={() => null}
          value={true}
          fullWidth={true}
          label="Checkbox"
          helpText="Help text"
          error={error}
          success={success}
        />
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
            error={error}
            helpText={error ? "Help text" : ""}
          />
          <RadioBlock
            onChange={val => setRadio2(val)}
            value={radio2}
            options={[
              { label: "Option a", value: 1 },
              { label: "Option b", value: 2 }
            ]}
            helpText={error ? "Help text" : ""}
            error={error}
            success={success}
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
          helpText={error ? "Help text" : ""}
          error={error}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Switches">
        <div>
          <SwitchBlock
            label="Switch on"
            onChange={val => console.dir(val)}
            value={true}
            helpText={error ? "Help text" : ""}
            error={error}
            success={success}
          />
          <SwitchBlock
            label="Switch off"
            onChange={val => console.dir(val)}
            value={false}
            helpText={error ? "Help text" : ""}
            error={error}
            success={success}
          />
        </div>
        <SwitchBlock
          label="With Error"
          onChange={val => console.dir(val)}
          value={true}
          fullWidth={true}
          helpText={error ? "Help text" : ""}
          error={error}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Dates">
        <GridContainer>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="DateTime"
              inputProps={{ placeholder: "(click to pick date and time)" }}
              helpText={error ? "Help text" : ""}
              error={error}
              success={success}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="Date"
              datetimeProps={{ timeFormat: false }}
              inputProps={{ placeholder: "(click to pick date)" }}
              helpText={error ? "Help text" : ""}
              error={error}
              success={success}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <DatetimeBlock
              labelText="Time"
              datetimeProps={{ dateFormat: false }}
              inputProps={{ placeholder: "(click to pick time)" }}
              helpText={error ? "Help text" : ""}
              error={error}
              success={success}
            />
          </GridItem>
        </GridContainer>
      </HorizontalBlock>
      <HorizontalBlock label="tags">
        <TagsBlock
          tags={["pizza", "pasta", "parmesan"]}
          onChange={tags => console.dir(tags)}
          fullWidth={true}
          helpText={error ? "Help text" : ""}
          error={error}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="selects">
        <SelectBlock
          innerLabelText="Single Select"
          value={select1}
          onChange={val => setSelect1(val as number[])}
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 }
          ]}
          error={error}
          helpText={error ? "Help text" : ""}
          success={success}
        />
        <SelectBlock
          innerLabelText="Single Select"
          outerLabelText="Single Select with Outer Label"
          value={select1}
          onChange={val => setSelect1(val as number[])}
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 }
          ]}
          error={error}
          helpText={error ? "Help text" : ""}
          success={success}
        />
        <SelectBlock
          innerLabelText="Multi Select"
          outerLabelText="Multi Select with Outer Label"
          multiple={true}
          value={select2}
          onChange={val => setSelect2(val as number[])}
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 }
          ]}
          error={error}
          helpText={error ? "Help text" : ""}
          success={success}
        />
      </HorizontalBlock>
      <HorizontalBlock label="Error">
        <Button color="rose" onClick={() => setError(!error)} className={classes.registerButton}>
          Toggle Error
        </Button>
        <Button color="rose" onClick={() => setSuccess(!success)} className={classes.registerButton}>
          Toggle Success
        </Button>
      </HorizontalBlock>
    </form>
  );

});

