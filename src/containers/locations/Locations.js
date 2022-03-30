import React, { useState } from "react";
import LocationCard from "../../components//LocationCard";
import { Grid } from "@mui/material";
import ViewLocation from "../ViewLocation/ViewLocation";

function Locations() {
  const [openLocation, setOpenLocation] = useState(false);
  const handleClose = () => setOpenLocation(false);
  const handleOpen = () => setOpenLocation(true);

  //dummydata
  const data = {
    firstName: "shaznan",
    dateCreated: new Date(),
    title: "Colombo",
    location: "https://www.google.com/maps/@6.9091157,79.8632827,15z",
  };

  return (
    <>
      <ViewLocation open={openLocation} handleClose={handleClose} data={data} />
      <div className="container">
        <Grid container spacing={2}>
          <LocationCard
            handleOpen={handleOpen}
            title="Colombo"
            firstName="shaznan"
            imgUrl="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <LocationCard
            handleOpen={handleOpen}
            firstName="shaznan"
            imgUrl="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </Grid>
      </div>
    </>
  );
}

export default Locations;
