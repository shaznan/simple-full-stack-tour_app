import React, { useState } from "react";
import AddLocationModal from "../../components/AddLocationModal/AddLocationModal";
import AddBtn from "../../components/AddBtn";
import axios from "axios";
import { SERVICE } from "../../constants/index";

function AddLocation({ getAllTours }) {
  const [firstName, setFirstName] = useState(null);
  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [province, setProvince] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const saveLocation = async () => {
    try {
      await axios.post(`${SERVICE.HEROKU}/api/v1/tours`, {
        firstName,
        imgUrl,
        description,
        title,
        province,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = () => {
    if (!firstName || !title || !imgUrl || !description || !province) {
      setErrorMsg(true);
    } else {
      setOpen(false);
      setErrorMsg(false);
      saveLocation();
      getAllTours();
    }
  };
  return (
    <>
      <AddBtn handleOpen={handleOpen} />
      <AddLocationModal
        setFirstName={setFirstName}
        setTitle={setTitle}
        setImgUrl={setImgUrl}
        setDescription={setDescription}
        errorMsg={errorMsg}
        province={province}
        setProvince={setProvince}
        open={open}
        handleClose={handleClose}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
}

export default AddLocation;
