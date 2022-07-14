import React, { useContext } from "react";
import StatsAdminAccount from "../stats - account stats/StatsAdminAccount";
import StatsProfileInfo from "../stats - profile info/StatsProfileInfo";
import { Desktop } from "../../../styles - global/global/MediaQueryDisplay";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import { Container } from "./Stats.styles";

const StatsAdmin = () => {
  const { auth } = useContext(AuthContext);
  const { adminProfile } = useContext(ProfileContext);

  return (
    <Container>
      <Desktop>
        {/*PROFILE INFO*/}
        {auth.isAuth && adminProfile.user ? (
          <StatsProfileInfo
            name={adminProfile.user.name}
            email={adminProfile.user.email}
            role="Admin"
          />
        ) : (
          "Loading"
        )}
      </Desktop>

      {/*STATS*/}
      <StatsAdminAccount />
    </Container>
  );
};

export default StatsAdmin;
