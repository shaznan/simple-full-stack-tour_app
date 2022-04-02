import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import InputFeild from "./InputFeild";
import Grid from "@mui/material/Grid";
import { ENTER_REQUIRED_FEILDS, LIST_OF_PROVINCE } from "../../constants/";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
  province,
  setProvince,
  errorMsg,
  onSubmitHandler,
}) {
  const options = [
    { value: LIST_OF_PROVINCE.CENTRAL_PROVINCE, label: "Central Province" },
    { value: LIST_OF_PROVINCE.NORTHERN_PROVINCE, label: "Northern Province" },
    {
      value: LIST_OF_PROVINCE.NORTH_CENTRAL_PROVINCE,
      label: "North Central Province",
    },
    { value: LIST_OF_PROVINCE.EASTERN_PROVINCE, label: " EasternProvince" },
    {
      value: LIST_OF_PROVINCE.NORTH_WESTERN_PROVINCE,
      label: " Western Province",
    },
    { value: LIST_OF_PROVINCE.SOUTHERN_PROVINCE, label: "Southern Province" },
  ];

  // useMemo(() => setProvince[0], []);

  console.log(province);

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
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography variant="body2" style={{ marginRight: "1rem" }}>
                  Select A Province
                </Typography>
                <Dropdown
                  options={options}
                  onChange={(e) => {
                    setProvince(e.value);
                  }}
                  value={province}
                  placeholder="Select a province"
                />
              </div>
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
