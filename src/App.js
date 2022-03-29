import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Header from "./components/Header";
import AddBtn from "./components/AddBtn";
import AddLocationModal from "./components/AddLocationModal";

function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="App">
      <Header />
      <AddBtn handleOpen={handleOpen} />
      <AddLocationModal open={open} handleClose={handleClose} />
      <div className="container">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
