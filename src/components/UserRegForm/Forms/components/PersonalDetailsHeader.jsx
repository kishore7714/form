import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useStyles from '../../styles';

export default function PersonalDetailsHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.FormHeader}>
            <Typography  component="h1" variant="h4" align="center">
            <Box  fontWeight="600">
            Add Your Personal Details
      </Box>  
             </Typography>
            <p align="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    )

}