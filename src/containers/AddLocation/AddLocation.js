import React, { useState } from "react";
import AddLocationModal from "../../components/AddLocationModal/AddLocationModal";
import AddBtn from "../../components/AddBtn";

function AddLocation() {
  const [firstName, setFirstName] = useState(null);
  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmitHandler = () => {
    !firstName || !title || !imgUrl || !description || !location
      ? setErrorMsg(true)
      : setErrorMsg(false);
  };
  return (
    <>
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
    </>
  );
}

export default AddLocation;
