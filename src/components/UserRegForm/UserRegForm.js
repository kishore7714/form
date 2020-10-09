import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import Header from '../Header/Header';
import PersonalDetails from './Forms/PersonalDetails';
import CompanyDetails from './Forms/CompanyDetails';
import OtpValidation from './Forms/OtpValidation';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import PersonalDetailsHeader from "./Forms/components/PersonalDetailsHeader";
import CompanyDetailsHeader from "./Forms/components/CompanyDetailsHeader";
import OtpHeader from "./Forms/components/OtpHeader";
import OtpFooter from "./Forms/components/OtpFooter";
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  
  switch (step) {
    case 0:
      return <PersonalDetails formField={formField} />; 
    case 1:
      return <CompanyDetails formField={formField} />;
    case 2:
      return <OtpValidation formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function UserRegForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  useEffect(() => {
    localStorage.clear();
  });

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    const formValues = JSON.stringify(values, null, 2)
    localStorage.setItem("formValues", formValues);
    actions.setSubmitting(false);
    props.history.push("/Welcome");

  }

  function _handleSubmit(values, actions) {
    

    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Header>
        <Stepper color="primary" activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel className={classes.stepperLabel}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Header>
      <React.Fragment>
        {activeStep === steps.length ? (
          null
        ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >

              {({ isSubmitting }) => (
                <div className={classes.root}>
                  {activeStep === 0 ? (<PersonalDetailsHeader />) : activeStep === 1 ? (<CompanyDetailsHeader />) : (<OtpHeader />)}
                  <Paper className={classes.paper}>
                    <Form id={formId}>
                      {_renderStepContent(activeStep)}

                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button size="large" onClick={_handleBack} className={classes.backbutton}>
                            Back
                          </Button>
                        )}
                        <div className={classes.wrapper}>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            size="large"
                            variant="contained"
                            color="primary"
                            className={activeStep === 0 ? classes.button : classes.secondButton}
                          >
                            {activeStep === 1 ? 'Send OTP' : activeStep === 2 ? 'Verify OTP' : 'Next'}

                          </Button>
                          {isSubmitting && (
                            <CircularProgress
                              size={24}
                              className={classes.buttonProgress}
                            />

                          )}
                        </div>
                      </div>
                    </Form>
                    {activeStep === 2 ?
                      <>
                        <hr className={classes.formSeperator} />
                        <OtpFooter />
                      </> : null}
                  </Paper>
                </div>
              )}

            </Formik>
          )}
      </React.Fragment>


    </React.Fragment>
  );
}