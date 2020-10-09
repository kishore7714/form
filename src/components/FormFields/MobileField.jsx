import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';
export default function MobileField(props) {
  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const [focus, setFocus] = useState("unfocused");


  function _renderHelperText() {
    
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText> {error}</FormHelperText>;
    }
  }

  const cbFocusChange = (type, e) => {
    setFocus(type)
    if (e) {
      setValue(e.target.value)
      
    }
  }

  return (
    <>
      <p className={focus === "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl variant="outlined" classes={classes.formControl} {...rest} error={meta.touched && meta.error && true} className={meta.error? 'error' : ''}>
        <PhoneInput
          country={'in'}
          {...field}
          onFocus={() => cbFocusChange('focused')}
          onBlur={(e) => cbFocusChange('unfocused', e)}

          value={field.value}
          inputClass={classes.mobileInput}
        />
        {_renderHelperText()}
      </FormControl>
    </>
  );
}