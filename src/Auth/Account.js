import React, { Children, createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userPool from "./userPool";

const AccountContext = createContext();

//if confused with this promise, resolve, reject, watch this=> https://www.youtube.com/watch?v=OXpZfyVXeI8&t=8s

const Account = (props) => {
  const authenticate = async (username, password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ username, userPool });
      const authDetails = new AuthenticationDetails({ username, password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
          console.log("onSuccess", data);
        },
        onFailure: (err) => {
          reject(err);
          console.log(err);
        },
        newPasswordRequired: (data) => {
          resolve(data);
          console.log("newPasswordRequired", data);
        },
      });
    });
  };
  return (
    <AccountContext.Provider value={authenticate}>
      {props.Children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
