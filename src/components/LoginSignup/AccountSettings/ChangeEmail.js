import React, { useState, useContext } from "react";
import useAuthenticate from "../../../Auth/useAuthenticate";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const ChangePassword = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useAuthenticate();

  const onSubmit = (event) => {
    event.preventDefault();
    //email is destructured from attributes
    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>New Email</label>
        <input
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <label>Current password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
