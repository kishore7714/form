import React, { useState } from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  TextField,
  FormControl,
  FormHelperText
} from '@material-ui/core';

import useStyles from '../UserRegForm/styles';
export default function InputField(props) {

  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);
  const [focus, setFocus] = useState("unfocused");

  function _renderHelperText() {
    //function for render error message
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText > {error}</FormHelperText>;
    }
  }

  return (
    <>
      <p className={focus === "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl variant="outlined" {...rest}  error={meta.touched && meta.error && true}>
        <TextField
          type="text"
          color="primary"
          variant="outlined"
          error={meta.touched && meta.error && true}
          {...field}
          onFocus={() => { setFocus("focused") }}
          onBlur={() => { setFocus("unfocused") }}

        />
        {_renderHelperText()}
      </FormControl>
    </>
  );
}