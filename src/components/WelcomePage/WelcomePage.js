import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import useStyles from './style';
import done from "../../img/done.png";
export default function WelcomePage(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("")

  useEffect(() => {

    const values = JSON.parse(localStorage.getItem('formValues'));
    if (values === null) {
      props.history.push("/");
    } else {
      setUserName(values.fullName)
    }
  }, [props.history]);
  return (
    <>
      {userName === "" ? null : <div className={classes.pageContainer}>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} className={classes.content}>

            <Typography component="h2" variant="h3" align="center">
              <img src={done} className={classes.contentImage} alt="" />
              <Box fontWeight="600" letterSpacing={3}>
                Congrats, {userName}
              </Box >
            </Typography>
            <Typography className={classes.useName} component="h1" variant="h5" align="center">
              <Box fontWeight="400" color="primary" letterSpacing={3}>
                Your account has been created
               </Box >

            </Typography>
          </Grid>
        </Grid>
      </div>}
    </>
  );
}