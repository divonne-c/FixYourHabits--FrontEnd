import React, { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import { AuthContext } from "../../../context/AuthContext";
import StatsProfileInfo from "../stats - profile info/StatsProfileInfo";

const StatsAdminProfile = () => {
  const { auth } = useContext(AuthContext);
  const { adminProfile } = useContext(ProfileContext);

  return (
    <div>
      {auth.isAuth && adminProfile.user ? (
        <StatsProfileInfo
          name={adminProfile.user.name}
          email={adminProfile.user.email}
          role="Admin"
        />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default StatsAdminProfile;
