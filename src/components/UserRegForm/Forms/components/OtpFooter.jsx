import React from 'react';
import Email from "./Email";
import useStyles from '../../styles';
import { useFormikContext } from 'formik';

export default function OtpFooter(props) {
    const classes = useStyles();
    const { values: formValues } = useFormikContext();
    return (
        <div className={classes.FormHeader}>
            <p align="center">Did't receive the mail ? Check your spam filter for an email <br />from <span className={classes.emailFooter}><Email formValues={formValues} /></span></p>
        </div>
    )

}