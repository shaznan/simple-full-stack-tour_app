import React from "react";
import TourScreen from "./screens/TourScreen";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="tours" element={<TourScreen />} />
    </Routes>
  );
};

export default App;
