import React, { ComponentType } from "react";
import ClassNames from "classnames";

import withStyles, { WithStyles, StyledComponentProps } from "@material-ui/core/styles/withStyles";

import Button from "@bubbly/components/modules/Buttons/Button";
import Card from "@bubbly/components/modules/Card/Card";
import {Alert} from "@bubbly/components/modules/Alert/Alert";

import { WizardStyle } from "./WizardStyle";
// TODO: Consider using Material's css hook: https://material-ui.com/layout/use-media-query/
import { UseCssBreakPoint } from "~/core/hooks/UseCssBreakPoint";

// type StyledComponent = k;
export interface StepComponentProps {
  isValidCallback: (isValid: boolean) => any,
  forceValidation: boolean,
}
export type StepComponent = ComponentType<StepComponentProps & StyledComponentProps<string>>;

const Wizard = withStyles(WizardStyle)((
  {
    classes,
    steps,
    title,
    subtitle,
    previousButtonClasses = "",
    previousButtonText = "Previous",
    nextButtonClasses = "",
    nextButtonText = "Next",
    finishButtonClasses = "",
    finishButtonText = "Finish",
    finishButtonClick,
    validate = false,
    color = "rose"
  }
    : WithStyles<typeof WizardStyle> & {
    steps: {
      name: string,
      // Component: React.FunctionComponent<{isValidCallback: (isValid: boolean) => any }>,
      Component: StepComponent,

    }[],
    title: React.ReactChild,
    subtitle: React.ReactChild,
    previousButtonClasses?: string,
    previousButtonText?: React.ReactChild,
    nextButtonClasses?: string,
    nextButtonText?: React.ReactChild,
    finishButtonClasses?: string,
    finishButtonText?: React.ReactChild,
    finishButtonClick: () => any,
    validate?: boolean,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "gray",
  }
) => {

  // console.log(`Wizard`);


  // State

  let wizardRef: HTMLElement;
  UseCssBreakPoint(); // Will cause re-render on css breakpoint change
  const [currentStep, setCurrentStep] = React.useState(0);
  const [stepValidState, setStepValidState] = React.useState(() => steps.map((prop, key) => {return false}));
  const [movingTabStyle, setMovingTabStyle] = React.useState({ transition: "transform 0s" });
  const [showCannotProceedAlert, setShowCannotProceedAlert] = React.useState(false);
  const [forceValidation, setForceValidation] = React.useState(false);



  // Functions

  const isValidCallback = (stepIndex: number, isValid: boolean) => {
    // console.log(`isValidCallback ${stepIndex} ${isValid}`);
    let stepValidStateNext = stepValidState.slice(); // make a copy
    stepValidStateNext[stepIndex] = isValid;
    setStepValidState(stepValidStateNext);
  };

  const getWidth = (): string => {
    let width = "100%";
    if (steps.length !== 1) {
      if (window.innerWidth < 600) {
        if (steps.length !== 3) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      } else {
        if (steps.length === 2) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      }
    }
    return width;
  };
  const [width, setWidth] = React.useState(() => getWidth());

  const refreshAnimation = (index: number = 0) => {
    // console.log(`Step.refreshAnimation ${index}`);
    const total = steps.length;
    let li_width = 100 / total;
    const total_steps = steps.length;
    // @ts-ignore: Typescript doesn't know of offsetWidth
    let move_distance = wizardRef.children[0].offsetWidth / total_steps;
    let index_temp = index;
    let vertical_level = 0;

    const mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      // @ts-ignore: Typescript doesn't know of offsetWidth
      move_distance = wizardRef.children[0].offsetWidth / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    setWidth(li_width + "%");

    const step_width = move_distance;
    move_distance = move_distance * index_temp;

    const current = index + 1;

    if (current === 1 || (mobile_device === true && index % 2 === 0)) {
      move_distance -= 8;
    } else if (
      current === total_steps ||
      (mobile_device === true && index % 2 === 1)
    ) {
      move_distance += 8;
    }

    if (mobile_device) {
      vertical_level = parseInt(index / 2 + "", 10);
      vertical_level = vertical_level * 38;
    }
    const movingTabStyle = {
      width: step_width,
      transform:
        "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)",
      transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
    };
    setMovingTabStyle(movingTabStyle);
  };

  const handleNavigationStepChange = (key: number) => {
    // Block forward transition if this or any prior steps are invalid.
    let validationPassed = true;
    if (key > currentStep) {
      for (let i = currentStep; i < key; i++) {
        console.dir(stepValidState);
        if (!stepValidState[i]) {
          validationPassed = false;
          break;
        }
      }
    }
    if (validationPassed) {
      if (key >= steps.length) {
        finishButtonClick();
      }
      else {
        setCurrentStep(key);
        refreshAnimation(key);
      }
    }
    else {
      setShowCannotProceedAlert(true);
      setForceValidation(true);
    }
  };


  // Effects

  React.useEffect(refreshAnimation, [false]);


  // JSX

  const CannotProceedAlertJsx = (
    <Alert
      title="Please complete the required fields to proceed."
      // type
      onConfirm={() => setShowCannotProceedAlert(false)}
      showConfirm={false}
      autoClose={3}
    >
      I will close in 3 seconds.
    </Alert>
  );

  const HeaderJsx = (
    <div className="wizard-header">
      <div className={classes.wizardHeader}>
        <h3 className={classes.title}>{title}</h3>
        <h5 className={classes.subtitle}>{subtitle}</h5>
      </div>
      <div className={classes.wizardNavigation}>
        <ul className={classes.nav}>
          {steps.map((prop, key) => {
            return (
              <li
                className={classes.steps}
                key={key}
                style={{ width: width }}
              >
                <a
                  className={classes.stepsAnchor}
                  onClick={() => handleNavigationStepChange(key)}
                >
                  {prop.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className={classes.movingTab + " " + classes[color]}
          style={movingTabStyle}
        >
          {steps[currentStep].name}
        </div>
      </div>
    </div>
  );

  const ContentJsx = (
    <div className={classes.content}>
      {steps.map((prop, key) => {
        const stepContentClasses = ClassNames({
          [classes.stepContentActive]: currentStep === key,
          [classes.stepContent]: currentStep !== key
        });
        return (
          <div className={stepContentClasses} key={key}>
            <prop.Component
              isValidCallback={(isValid: boolean) => isValidCallback(key, isValid)}
              forceValidation={forceValidation}
            />
          </div>
        );
      })}
    </div>
  );

  const FooterJsx = (
    <div className={classes.footer}>
      <div className={classes.left}>
        {currentStep > 0 ? (
          <Button
            className={previousButtonClasses}
            onClick={() => handleNavigationStepChange(currentStep - 1)}
          >
            {previousButtonText}
          </Button>
        ) : null}
      </div>

      <div className={classes.right}>

        {currentStep < steps.length ? (
          <Button
            color={color}
            className={nextButtonClasses}
            disabled={!stepValidState[currentStep]}
            onClick={() => handleNavigationStepChange(currentStep + 1)}
          >
            {nextButtonText}
          </Button>
        ) : (
          <Button
            color={color}
            className={finishButtonClasses}
            onClick={() => handleNavigationStepChange(currentStep + 1)}
          >
            {finishButtonText}
          </Button>
        )}

      </div>
      <div className={classes.clearfix}/>
    </div>
  );


  return (
    <div
      className={classes.wizardContainer}
      ref={ref => {wizardRef = ref as HTMLElement;}}
    >
      {showCannotProceedAlert === true && CannotProceedAlertJsx}

      <Card className={classes.card}>
        {HeaderJsx}
        {ContentJsx}
        {FooterJsx}
      </Card>
    </div>
  );

});

// Wizard.defaultProps = {
//   color: "rose",
//   title: "Here should go your title",
//   subtitle: "And this would be your subtitle",
//   previousButtonText: "Previous",
//   previousButtonClasses: "",
//   nextButtonClasses: "",
//   nextButtonText: "Next",
//   finishButtonClasses: "",
//   finishButtonText: "Finish"
// };
//
// Wizard.propTypes = {
//   classes: PropTypes.object.isRequired,
//   steps: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       StepComponent: PropTypes.func.isRequired,
//       stepId: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose"
//   ]),
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   previousButtonClasses: PropTypes.string,
//   previousButtonText: PropTypes.string,
//   nextButtonClasses: PropTypes.string,
//   nextButtonText: PropTypes.string,
//   finishButtonClasses: PropTypes.string,
//   finishButtonText: PropTypes.string,
//   finishButtonClick: PropTypes.func,
//   validate: PropTypes.bool
// };

export default Wizard;
