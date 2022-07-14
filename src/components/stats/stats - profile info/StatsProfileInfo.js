import React from "react";
import { Card } from "../../../styles - global/cards/CardHome";
import { Profile } from "./StatsProfileInfo.styles";

const StatsProfileInfo = ({ name, email, role }) => {
  return (
    <Card>
      <Profile>
        <span className="material-symbols-outlined">person</span>
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
