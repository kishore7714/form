import { makeStyles } from '@material-ui/core/styles';
const primary = "#324466";
export default makeStyles(theme => ({

  FormHeader: {
    marginTop: theme.spacing(3),
    backgroundColor: "white"
  },
  stepper: {
    padding: theme.spacing(2, 0, 2),
    backgroundColor: primary,

  },
  stepperLabel: {
    color: theme.palette.text.default
  },
  buttons: {
    display: 'flex',
  },
  backbutton: {
    width: "25%!important",
    backgroundColor: "#e6e6e6",
    height: "43px",
    marginRight: "15px"
  },
  secondButton: {
    width: "400px!important",
    backgroundColor: "#f25436",
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: "#f25436",
    width: "552px!important",
  },
  wrapper: {
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  selectEmpty: {
    paddingLeft: "6px",
    backgroundColor: "#3f51b5"
  },
  select: {
    color: "white",
    "&:not([multiple]) option": {
      backgroundColor: "white"
    }
  },
  emailHeader: {
    fontWeight: 600
  },
  emailFooter: {
    color: "#f25436",
  },
  regionSelector:{
    width: "551px!important",
    height: "40px!important",
  },
  mobileInput: {
    width: "551px!important",
    height: "40px!important",

  },
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      backgroundColor: "white",
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    },
    borderBottom: "1px solid lightgrey"
  },
  genderContainer: {
    display: "flex",
    "& button": {
      marginRight: "20px"
    }
  },
  genderSelectedButton: {
    color: "#f25436",
    backgroundColor: "#fdefe5",
    border: "none",
    "&:hover": {
      color: "#f25436",
      backgroundColor: "#fdefe5",
      border: "none",
    }
  },
  genderButton: {
    textTransform: 'none',
    borderColor: "#c7c7c7"
  },
  OtpContainer: {
    width: "551px"
  },
  otpFocusStyle: {

  },
  OtpSingleBox: {
    width: "62px !important",
    height: "62px !important",
    fontSize: "22px",
    marginRight: "42px",

  },
  formControl: {
    backgroundColor: " rgb(253, 214, 214) !important",
    color: "rgb(104, 7, 60)",
    height: "55px !important",
    width: "300px !important"
  },

  UploadContainer: {
    display: "flex",
    "& img": {
      width: "80px!important",  
     height: "80px!important",
      borderRadius: "50%"
    }
  },
  UploadText: {
    color: "#f25436",
    marginLeft: "40px",
    letterSpacing: "1px",
    fontWeight: "300",
    fontSize: "15px",

  },
  checkBoxLabel: {
    marginTop: "12px!important",
    "& span": {
      color: "#f25436!important"
    }
  },
  LabelColor: {
    color: "#f25436!important"
  },
  formSeperator: {
    position: "relative",
    left: "-24px",
    width: "109%",
    opacity: "0.2"
  }
}));