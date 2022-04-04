import React, { useEffect, useState } from "react";
import LocationCard from "../../components//LocationCard";
import { Grid } from "@mui/material";
import ViewLocation from "../ViewLocation/ViewLocation";
import axios from "axios";
import { SERVICE } from "../../constants/index";

function Locations({ tours, error, getTours, getAllProvince }) {
  const [openLocation, setOpenLocation] = useState(false);
  const handleOpen = () => setOpenLocation(true);

  const deleteTour = async (id) => {
    try {
      await axios.delete(`${SERVICE.HEROKU}/api/v1/tours?id=${id}`);
      getTours();
      getAllProvince();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <Grid container spacing={2}>
          {tours?.length ? (
            tours.map((item) => (
              <LocationCard
                key={item._id}
                handleOpen={handleOpen}
                data={item}
                deleteTour={deleteTour}
              />
            ))
          ) : (
            <div>No Tours Found</div>
          )}
        </Grid>
      </div>
    </>
  );
}

export default Locations;
