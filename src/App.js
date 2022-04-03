import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectProvince from "./components/SelectProvince";
import AddLocations from "./containers/AddLocation/AddLocation";
import Locations from "./containers/locations/Locations";
import axios from "axios";
import { SERVICE } from "./constants/index";

function App() {
  const [tours, setAllTours] = useState([]);
  const [error, setError] = useState(false);
  const [allProvince, setAllProvince] = useState(null);

  const getAllTours = async () => {
    try {
      const tours = await axios.get(`${SERVICE.HEROKU}/api/v1/tours`);
      setAllTours(tours?.data?.tour);
    } catch (error) {
      setError(true);
    }
  };

  const getAllProvince = async () => {
    try {
      const provinces = await axios.get(
        `${SERVICE.HEROKU}/api/v1/tours?fields=province`
      );
      setAllProvince(provinces?.data?.tour);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getAllProvince();
  }, []);

  return (
    <div className="App">
      <Header />
      <AddLocations getAllTours={getAllTours} />
      <SelectProvince allProvince={allProvince} />
      <Locations tours={tours} error={error} getAllTours={getAllTours} />
    </div>
  );
}

export default App;
