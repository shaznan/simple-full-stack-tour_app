import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Header from "./components/Header";
import AddBtn from "./components/AddBtn";
import AddLocationModal from "./components/AddLocationModal/AddLocationModal";
import AddLocation from "./containers/AddLocation/AddLocation";

function App() {
  return (
    <div className="App">
      <Header />
      <AddLocation />

      <div className="container">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
