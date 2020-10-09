import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';
export function CountryFlag(props) {
  return (
    <span
      className={"flag-icon flag-icon-" + props.code}
      style={{
        fontSize: props.size || "15px",
        marginLeft: "10px",
        marginRight: "6px",
        width: "20px",
        height: "20px",
        borderRadius: "50px",
        marginTop: "5px"
      }}
    />
  );
}

export const CountryFlagSelectOption = props => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center", width: "505px" }}>
        <CountryFlag size={props.flagSize} code={props.value.toLowerCase()} />
        {props.label}
      </div>
    </components.Option>
  );
};

export const CountryFlagValueContainer = ({ children, ...props }) => {
  const code = (props.hasValue && props.getValue()[0].value) || false;
  return (
    <div style={{ display: "flex", flexGrow: 1, width: "512px" }}>
      {(code && <CountryFlag code={code.toLowerCase()} />) || null}
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  );
};
const brandColor = '#f25436';
const styles = {

  valueContainer: (base, state) => {
    const height = "30px";
    return { ...base, height };
  },
  control: (base, state) => {
    return {

      ...base,
      borderColor: state.isFocused
        ? brandColor
        : base.borderColor,

      '&:hover': { borderColor: '#f25436' },
      boxShadow: 'none',

    }
  },
};

export default function CountrySelector(props) {
  const classes = useStyles();
  const [options, setOptions] = useState(countryList().getData());

  const [valueCust, setValueCust] = useState(null);
  const { label, data, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const [focus, setFocus] = useState("unfocused")
  const { setValue } = helper;

  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  const changeHandler = value => {
    setValueCust(value);
    setValue(value);
    console.log(value)
  };

  useEffect(() => {
    setOptions(countryList().getData())
  }, [])

  return (
    <>
      <p className={focus === "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl
        onFocus={() => { setFocus("focused") }}
        onBlur={() => { setFocus("unfocused") }}
        variant="outlined" {...rest} error={meta.touched && meta.error && true} >
        <Select
          {...field}
          errorText={touched && error}
          styles={styles}
          options={options}
          value={valueCust}
          showDefaultOption={true}
          onChange={changeHandler}
          classNamePrefix='cst-option'
          components={{
            Option: CountryFlagSelectOption,
            ValueContainer: CountryFlagValueContainer
          }}
        />

        {_renderHelperText()}
      </FormControl>
    </>
  );
}