export default function Email(props) {
    const { formValues } = props;
    const { email} = formValues;
    return `${email} `
  }