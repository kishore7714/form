import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField, CheckboxField } from '../../FormFields';
import ImageUpload from "../../FormFields/ImageUpload";

export default function PaymentForm(props) {
  const {
    formField: { companyName, email, jobTitle, yearsOfExperience, termsAndConditions }
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
      
        <Grid item xs={12} md={12}>
          <ImageUpload />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={companyName.name}
            label={companyName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={email.name}
            label={email.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={jobTitle.name}
            label={jobTitle.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={yearsOfExperience.name}
            label={yearsOfExperience.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={termsAndConditions.name}
            label={termsAndConditions.label}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}