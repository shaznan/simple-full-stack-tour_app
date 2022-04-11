import React, { Children, createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./userPool";

//if confused with this promise, resolve, reject, watch this=> https://www.youtube.com/watch?v=OXpZfyVXeI8&t=8s

const useAuthenticate = () => {
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

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
  return [authenticate];
};

export default useAuthenticate;
