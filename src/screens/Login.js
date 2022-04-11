import React, { useState, useEffect, useContext } from "react";
import useAuthenticate from "../Auth/useAuthenticate";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate] = useAuthenticate();

  const authenticateUser = async () => {
    try {
      const authenticationConfirmation = authenticate(email, password);
      console.log("LoggedIn", authenticationConfirmation);
    } catch (error) {
      console.log(error, "SHIT");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    authenticateUser();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
