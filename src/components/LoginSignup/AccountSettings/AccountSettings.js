import React, { useEffect, useState } from "react";
import useAuthenticate from "../../../Auth/useAuthenticate";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

const AccountSettings = () => {
  const { getSession } = useAuthenticate();
  const [LoggedIn, setLoggedIn] = useState(false);

  const setLoggInStatus = async () => {
    try {
      await getSession();
      setLoggedIn(true);
    } catch (error) {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    setLoggInStatus();
  }, []);

  return (
    <div>
      {LoggedIn && (
        <>
          <h2>settings</h2>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  );
};

export default AccountSettings;
