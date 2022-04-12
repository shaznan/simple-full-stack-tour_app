import React, { useState, useContext, useEffect } from "react";
import useAuthenticate from "../../../Auth/useAuthenticate";

const LoginStatus = () => {
  const [status, setStatus] = useState(false);
  const { getSession, logoutUser } = useAuthenticate();

  const setLoginStatus = async () => {
    try {
      const session = await getSession();
      console.log(session);
      setStatus(true);
    } catch (error) {
      setStatus(false);
    }
  };

  useEffect(() => {
    setLoginStatus();
  }, []);

  return (
    <div>
      {status ? <button onClick={logoutUser}>Logout</button> : "Please log in"}
    </div>
  );
};

export default LoginStatus;
