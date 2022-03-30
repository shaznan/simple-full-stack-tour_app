import React, { useState } from "react";
import AddLocationModal from "../../components/AddLocationModal/AddLocationModal";
import AddBtn from "../../components/AddBtn";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

function AddLocation() {
  const [firstName, setFirstName] = useState(null);
  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmitHandler = () => {
    !firstName || !title || !imgUrl || !description || !location
      ? setErrorMsg(true)
      : setErrorMsg(false);
  };
  return (
    <>
      <AddBtn handleOpen={handleOpen} />
      <AddLocationModal
        setFirstName={setFirstName}
        setTitle={setTitle}
        setImgUrl={setImgUrl}
        setDescription={setDescription}
        setLocation={setLocation}
        errorMsg={errorMsg}
        open={open}
        handleClose={handleClose}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
}

export default AddLocation;
