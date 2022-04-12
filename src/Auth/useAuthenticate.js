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

  //to check if user is logged in and get the session details(token and stuff)
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err);
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  let results = {};

                  attributes.forEach(({ Name, Value }) => {
                    results[Name] = Value;
                  });

                  resolve(results);
                }
              });
            });
            resolve({ user, ...session, ...attributes });
          }
        });
      } else {
        reject();
      }
    });
  };

  const logoutUser = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };
  return { authenticate, getSession, logoutUser };
};

export default useAuthenticate;
