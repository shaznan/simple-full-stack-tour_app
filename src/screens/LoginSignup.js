import React from "react";
import Register from "../components/LoginSignup/Register/Register";
import Login from "../components/LoginSignup/Login/Login";
import LoginStatus from "../components/LoginSignup/LoginStatus/Loginstatus";
import AccountSettings from "../components/LoginSignup/AccountSettings/AccountSettings";

const LoginSignup = () => {
  return (
    <div>
      <LoginStatus />
      <Register />
      <Login />
      <AccountSettings />
    </div>
  );
};

export default LoginSignup;
