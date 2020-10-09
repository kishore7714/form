import React, { useState } from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  Button,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';
export default function SelectGender(props) {

  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const [gender, setGender] = useState("")

  const selectGender = (gender) => {
    setGender(gender)
    setValue(gender)
  }
  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText> {error}</FormHelperText>;
    }
  }

  return (
    <>
      <p>{props.label}</p>
   
      <FormControl variant="outlined" {...field} {...rest} error={meta.touched && meta.error && true}>
        <div className={classes.genderContainer}>
          <Button
            name="male"
            variant="outlined"
             onClick={() => selectGender("Male")}
            className={gender === "Male" ? classes.genderSelectedButton : classes.genderButton}
          >
            Male
            </Button>
          <Button
            onClick={() => selectGender("Female")}
            variant="outlined"
            className={gender === "Female" ? classes.genderSelectedButton : classes.genderButton}
             >
            Female
           </Button>
        
          <Button
            onClick={() => selectGender("Other")}
            variant="outlined"
            className={gender === "Other" ? classes.genderSelectedButton : classes.genderButton}
             >
            Other
           </Button>
        </div>
        {_renderHelperText()}
      </FormControl>
      
    </>
  );
}