import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";

function AddBtn({ handleOpen }) {
  return (
    <div className="addBtn">
      <Button
        variant="contained"
        style={{ backgroundColor: "black" }}
        onClick={handleOpen}
      >
        <span style={{ marginRight: "0.5rem" }}> Add </span> <AddBoxIcon />
      </Button>
    </div>
  );
}

export default AddBtn;
