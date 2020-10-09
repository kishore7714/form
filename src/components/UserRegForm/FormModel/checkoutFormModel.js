export default {
    formId: 'checkoutForm',
    formField: {
      fullName: {
        name: 'fullName',
        label: 'Full name',
        requiredErrorMsg: 'Full name is required'
      },
      countrySelect: {
        name: 'country',
        label: 'Country',
        requiredErrorMsg: 'Country is required'
      },
      state: {
        name: 'state',
        label: 'State',
        requiredErrorMsg: 'State is required'
      },
      mobile: {
        name: 'mobile',
        label: 'Mobile Number',
        invalidErrorMsg: 'Please enter a valid Mobile Number',
        requiredErrorMsg: 'Mobile Number is required'
      },
    
      companyName: {
        name: 'companyName',
        label: 'Company Name',
        requiredErrorMsg: 'Company Name is required'
      },
      email: {
        name: 'email',
        label: 'Email Id',
        requiredErrorMsg: 'Email is required',
        invalidErrorMsg: 'Please enter a valid Email'
      },
     
      selectGender: {
        name: 'selectGender',
        label: 'Gender',
        requiredErrorMsg: 'Gender is required',
      },
      jobTitle: {
        name: 'jobTitle',
        label: 'Job Title',
        requiredErrorMsg: 'Job Title is required'
      },
      termsAndConditions: {
        name: 'termsAndConditions',
        label: 'I accept the ',
      },
      yearsOfExperience: {
        name: 'yearsOfExperience',
        label: 'Years Of Experience',
        requiredErrorMsg: 'Experience is required'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiry date*',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      otp: {
        name: 'otp',
        label: 'Enter OTP here',
        requiredErrorMsg: 'OTP is required',
            }
    }
  };