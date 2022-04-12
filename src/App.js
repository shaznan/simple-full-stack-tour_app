import React from "react";
import TourScreen from "./screens/TourScreen";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import LoginSignup from "./screens/LoginSignup";

const App = () => {
  return (
    <Routes>
      <Route path="/Login" element={<LoginSignup />} />
      <Route path="tours" element={<TourScreen />} />
    </Routes>
  );
};

export default App;
