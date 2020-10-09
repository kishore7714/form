import React from 'react';
import { Typography } from '@material-ui/core';
import Email from "./Email";
import Box from '@material-ui/core/Box';
import useStyles from '../../styles';
import { useFormikContext } from 'formik';

export default function OtpHeader(props) {
    const classes = useStyles();
    const { values: formValues } = useFormikContext();
    return (
        <div className={classes.FormHeader}>
            <Typography component="h1" variant="h4" align="center">
            <Box fontWeight="600">
                Enter Your OTP
                </Box>
                </Typography>
            <p align="center">For Security, we need to verify your identity.We sent a 5-digit<br /> code to <span className={classes.emailHeader}> <Email  formValues={formValues} /></span> please enter it below.</p>
        </div>
    )
}