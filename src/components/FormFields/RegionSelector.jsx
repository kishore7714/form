import React, { useState,useEffect } from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountryJson from './countries.json';
import { useFormikContext } from 'formik';

import useStyles from '../UserRegForm/styles';

function RegionSelector(props) {
  const classes = useStyles();
  const [focus, setFocus] = useState("unfocused");
  const [fiteredState, setFiteredState] = useState([]);
  const [country, setCountry] = useState();
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  const { values: formValues } = useFormikContext();
useEffect(() => {
  const valueCountry =formValues;
  setCountry(valueCountry.country.label)
if(country !== undefined){
    const stateFilter = CountryJson.filter((data) => {
      return data.name === country;
    });
    const states = stateFilter[0].states;
    setFiteredState(states)
}
},[formValues, country]);


   const menuItem = fiteredState.map((item, index) => (
    <MenuItem key={index} value={item.name}>
    {item.name}
  </MenuItem>
    ))
  function _renderHelperText() {
    
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <>
      <p className={focus === "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl onFocus={() => { setFocus("focused") }}
        onBlur={() => { setFocus("unfocused") }} variant="outlined" {...rest} error={isError}>

        <Select
          IconComponent={ExpandMoreIcon}
          {...field}
          value={selectedValue ? selectedValue : ''}>
          {menuItem}
        </Select>
        {_renderHelperText()}
      </FormControl>
    </>
  );
}
export default RegionSelector;
