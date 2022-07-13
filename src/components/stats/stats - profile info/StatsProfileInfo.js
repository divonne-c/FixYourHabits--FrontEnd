import React from "react";
import { Profile } from "../stats - admin /StatsAdmin.styles";
import { Card } from "../../../styles - global/cards/CardHome";

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
