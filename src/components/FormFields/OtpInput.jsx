import React, {useState}from 'react';
import OtpInput from 'react-otp-input';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';
export default function OtpInputFrom(props) {
  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const [focus, setFocus] = useState("");

  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText> {error}</FormHelperText>;
    }
  }
  const handleChange = otp => {
    setValue(otp);
  }

  return (
    <>
      <p className={focus === "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl variant="outlined" {...rest} error={meta.touched && meta.error && true}>
        <OtpInput
          {...field}
          value={field.value}
          focusStyle={classes.otpFocusStyle}
          onChange={handleChange}
          numInputs={5}
          shouldAutoFocus={true}
          containerStyle={classes.OtpContainer}
          inputStyle={classes.OtpSingleBox}
          onFocus={() => { setFocus("focused") }}
          onBlur={() => { setFocus("unfocused") }} 
        />
        {_renderHelperText()}
      </FormControl>
      <br />
    </>
  );
}