import * as React from "react";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteIcon from "@mui/icons-material/Delete";

export default function LocaitonCard({ data, handleOpen, deleteTour }) {
  const { firstName, imgUrl, description, title, province, createdAt } =
    data || {};

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ maxWidth: 345 }} className="card">
        <div style={{ display: "flex", alignItems: "center" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {[...firstName][0]}
              </Avatar>
            }
            title={title}
            subheader={createdAt}
          />
          <DeleteIcon
            style={{ color: "grey", marginLeft: "auto", marginRight: "auto" }}
            onClick={() => deleteTour(data?._id)}
          />
        </div>
        <CardMedia
          component="img"
          height="194"
          image={imgUrl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <div
          style={{
            marginLeft: "1rem",
            display: "flex",
          }}
        >
          <LocationOnIcon style={{ opacity: 0.3 }} />
          <Typography variant="body2" color="text.secondary">
            {province}
          </Typography>
        </div>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
          <Button style={{ marginLeft: "auto" }} onClick={handleOpen}>
            View Location
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
