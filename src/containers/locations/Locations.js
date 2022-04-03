import React, { useEffect, useState } from "react";
import LocationCard from "../../components//LocationCard";
import { Grid } from "@mui/material";
import ViewLocation from "../ViewLocation/ViewLocation";

function Locations({ tours, error, getAllTours }) {
  const [openLocation, setOpenLocation] = useState(false);
  const handleClose = () => setOpenLocation(false);
  const handleOpen = () => setOpenLocation(true);

  useEffect(() => {
    getAllTours();
  }, []);

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
