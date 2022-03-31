import React, { useEffect, useState } from "react";
import LocationCard from "../../components//LocationCard";
import { Grid } from "@mui/material";
import ViewLocation from "../ViewLocation/ViewLocation";
import axios from "axios";
import { SERVICE } from "../../constants/index";

function Locations() {
  const [openLocation, setOpenLocation] = useState(false);
  const handleClose = () => setOpenLocation(false);
  const handleOpen = () => setOpenLocation(true);
  const [tours, setAllTours] = useState([]);
  const [error, setError] = useState(false);

  const getAllTours = async () => {
    try {
      const tours = await axios.get(`${SERVICE}/api/v1/tours`);
      setAllTours(tours?.data?.tour);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getAllTours();
  }, []);

  console.log(tours);

  return (
    <>
      {/* <ViewLocation open={openLocation} handleClose={handleClose} data={data} /> */}
      <div className="container">
        <Grid container spacing={2}>
          {tours?.length ? (
            tours.map((item) => (
              <LocationCard
                key={item._id}
                handleOpen={handleOpen}
                data={item}
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
