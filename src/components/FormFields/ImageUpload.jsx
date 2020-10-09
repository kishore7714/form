import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import Noimage from "../../img/noimage.png";
import useStyles from '../UserRegForm/styles';

export default function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    //function for set image to state
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  return (
    <>
      <Grid container >
        <Grid item lg={12} sm={12}>
          <label htmlFor="upload-button" className={classes.UploadContainer}>
            {image.preview ? (
              <img src={image.preview} alt=""/>
            ) : (
                <>
                  <img src={Noimage} alt="" />
                </>
              )}
            <h5 className={classes.UploadText} >Upload your Company Logo</h5>
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

    </>
  );
}