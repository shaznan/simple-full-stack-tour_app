import React from "react";
import { Input } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function InputFeild({ title, onChangeHandler, size = 6 }) {
  return (
    <Grid item lg={size}>
      <TextField
        id="outlined-basic"
        label={title}
        variant="outlined"
        onChange={onChangeHandler}
        style={{ width: "100%" }}
      />
    </Grid>
  );
}

export default InputFeild;
