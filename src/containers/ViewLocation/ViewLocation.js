import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "60vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  alignItems: "center",
};

function ViewLocation({ handleClose, open, data }) {
  const { firstName, dateCreated, title, location } = data || {};
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card className="card" style={{ width: "100%", height: "100%" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {[...firstName][0]}
              </Avatar>
            }
            title={title}
            subheader="September 14, 2016"
          />
          <iframe
            src="https://www.google.com/maps/@6.9091157,79.8632827,15z"
            width="100%"
            height="100%"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <CardMedia
            component="img"
            height="194"
            image={imgUrl}
            alt="Paella dish"
          /> */}
        </Card>
      </Box>
    </Modal>
  );
}

export default ViewLocation;
