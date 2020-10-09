import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { Grid } from '@material-ui/core';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';

export default function CheckboxField(props) {
  const classes = useStyles();
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }
  
  return (
    <Grid container>
      <Grid item xs={1} lg={1} md={1} sm={12}>
        <FormControl {...rest}>
          <FormControlLabel
            value={field.checked}
            checked={field.checked}
            control={<Checkbox {...field} onChange={_onChange} />}
          />
          {_renderHelperText()}
        </FormControl>
      </Grid>
      <Grid item xs={6} lg={6} md={6} sm={12}>
        <p className={classes.checkBoxLabel}>{label} <span>Terms And Conditions</span></p>
      </Grid>
    </Grid>

  );
}