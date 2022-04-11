import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID, //click general settings u will find pool id
  ClientId: process.env.REACT_APP_CLIENT_ID, // click app client settings u will find client id
};

export default new CognitoUserPool(poolData);
