import React from "react";
import "./App.css";
import Header from "./components/Header";
import SelectProvince from "./components/SelectProvince";
import AddLocations from "./containers/AddLocation/AddLocation";
import Locations from "./containers/locations/Locations";

function App() {
  return (
    <div className="App">
      <Header />
      <AddLocations />
      <SelectProvince />
      <Locations />
    </div>
  );
}

export default App;
