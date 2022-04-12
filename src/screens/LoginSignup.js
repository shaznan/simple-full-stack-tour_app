import React from "react";
import Register from "./Register";
import Login from "./Login";
import LoginStatus from "../Auth/Loginstatus";

const LoginSignup = () => {
  return (
    <div>
      <LoginStatus />
      <Register />
      <Login />
    </div>
  );
};

export default LoginSignup;
