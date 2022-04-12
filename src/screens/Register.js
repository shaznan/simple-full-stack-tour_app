import React, { useEffect, useState } from "react";
import UserPool from "../Auth/userPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [birthDate, setBirthdate] = useState(new Date().toISOString());
  const [phoneNumber, setPhoneNumber] = useState("");

  //If u set additional attributes must pass it seperately
  let attributeList = [
    new CognitoUserAttribute({
      Name: "picture",
      Value: picture,
    }),
    new CognitoUserAttribute({
      Name: "birthdate",
      Value: birthDate,
    }),
    new CognitoUserAttribute({
      Name: "phone_number",
      Value: phoneNumber,
    }),
  ];

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form
        onSubmit={onSubmit}
        style={{ fontSize: "1rem", display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="Picture">Picture</label>
        <input
          value={picture}
          type="text"
          onChange={(event) => setPicture(event.target.value)}
        ></input>
        <label htmlFor="Birthdate">Birthdate</label>
        <input
          value={birthDate}
          type="date"
          onChange={(event) => setBirthdate(event.target.value)}
        ></input>
        <label htmlFor="Phone Number">Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
