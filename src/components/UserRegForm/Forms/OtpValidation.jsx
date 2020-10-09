import React from 'react';
import { Grid } from '@material-ui/core';
import OtpInput from "../../FormFields/OtpInput";
export default function OtpValidation(props) {
  const {
    formField: { otp }
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <OtpInput
            name={otp.name}
            label={otp.label}
          />
        </Grid>
        <Grid item xs={12} md={12}>

          <br />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}