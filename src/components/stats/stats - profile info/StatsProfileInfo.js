import React, { useContext } from "react";
import { Card } from "../../../styles - global/cards/CardHome";
import { Profile } from "./StatsProfileInfo.styles";
import { ProfileContext } from "../../../context/ProfileContext";
import { AuthContext } from "../../../context/AuthContext";

const StatsProfileInfo = ({ name, email, role }) => {
  const { userProfile, adminProfile } = useContext(ProfileContext);
  const { auth } = useContext(AuthContext);

  return (
    <Card>
      <Profile>
        {auth.user.role === "ROLE_USER" && userProfile && userProfile.file && (
          <img src={userProfile.file.url} alt={userProfile.name} />
        )}

        {auth.user.role === "ROLE_ADMIN" &&
          adminProfile &&
          adminProfile.file && (
            <img src={adminProfile.file.url} alt={adminProfile.name} />
          )}

        {!adminProfile.file && !userProfile.file && (
          <span className="material-symbols-outlined">person</span>
        )}

        <div>
          <h3>{name}</h3>
          <p>{email}</p>
          <p className="role">{role}</p>
        </div>
      </Profile>
    </Card>
  );
};

export default StatsProfileInfo;
