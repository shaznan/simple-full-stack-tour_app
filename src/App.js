import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Header from "./components/Header";
import AddBtn from "./components/AddBtn";
import AddLocationModal from "./components/AddLocationModal/AddLocationModal";

function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [firstName, setFirstName] = useState(null);
  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);

  const onSubmitHandler = () => {
    !firstName || !title || !imgUrl || !description || !location
      ? setErrorMsg(true)
      : setErrorMsg(false);
  };

  return (
    <div className="App">
      <Header />
      <AddBtn handleOpen={handleOpen} />
      <AddLocationModal
        setFirstName={setFirstName}
        setTitle={setTitle}
        setImgUrl={setImgUrl}
        setDescription={setDescription}
        setLocation={setLocation}
        errorMsg={errorMsg}
        open={open}
        handleClose={handleClose}
        onSubmitHandler={onSubmitHandler}
      />
      <div className="container">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
