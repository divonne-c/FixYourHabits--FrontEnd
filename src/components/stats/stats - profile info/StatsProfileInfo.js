import React, { useContext } from "react";
import { Card } from "../../../styles - global/cards/CardHome";
import { Profile } from "./StatsProfileInfo.styles";
import { ProfileContext } from "../../../context/ProfileContext";

const StatsProfileInfo = ({ name, email, role }) => {
  const { userProfile } = useContext(ProfileContext);

  return (
    <Card>
      <Profile>
        {userProfile && userProfile.file ? (
          <img src={userProfile.file.url} alt={userProfile.name} />
        ) : (
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
