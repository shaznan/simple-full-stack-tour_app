import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import InputFeild from "./InputFeild";
import Grid from "@mui/material/Grid";
import { ENTER_REQUIRED_FEILDS } from "../../constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddLocationModal({
  open,
  handleClose,
  setFirstName,
  setTitle,
  setImgUrl,
  setDescription,
  setLocation,
  errorMsg,
  onSubmitHandler,
}) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="addModal">
            <div style={{ display: "flex" }}>
              <Typography variant="h5" style={{ marginBottom: "1rem" }}>
                Add Location Details
              </Typography>
              <span style={{ marginLeft: "auto" }}>
                <Button style={{ color: "black" }} onClick={handleClose}>
                  <CloseIcon />
                </Button>
              </span>
            </div>
            <Grid container spacing={2} style={{ width: "100%" }}>
              <InputFeild
                title="First Name"
                onChangeHandler={(e) => setFirstName(e.target.value)}
              />
              <InputFeild
                title="Title"
                onChangeHandler={(e) => setTitle(e.target.value)}
              />
              <InputFeild
                title="Img Url"
                size="12"
                onChangeHandler={(e) => setImgUrl(e.target.value)}
              />
              <InputFeild
                title="Description"
                size="12"
                onChangeHandler={(e) => setDescription(e.target.value)}
              />
              <InputFeild
                title="Location"
                size="12"
                onChangeHandler={(e) => setLocation(e.target.value)}
              />
            </Grid>
            {errorMsg && (
              <div className="errorMsg">
                <Typography variant="caption">
                  {ENTER_REQUIRED_FEILDS}
                </Typography>
              </div>
            )}
            <div className="submitBtn">
              <Button
                variant="contained"
                style={{ backgroundColor: "black" }}
                onClick={onSubmitHandler}
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
