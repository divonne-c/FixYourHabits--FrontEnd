import { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import { AuthContext } from "../../../context/AuthContext";
import StatsProfileInfo from "../stats - profile info/StatsProfileInfo";
import StatsToday from "../stats - today/StatsToday";
import StatsAccount from "../stats - account stats/StatsAccount";
import { Container } from "./Stats.styles";
import { Desktop } from "../../../styles - global/global/MediaQueryDisplay";

const Stats = () => {
  const { auth } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  return (
    <Container>
      <Desktop>
        {/*PROFILE INFO*/}
        {auth.isAuth && userProfile.user ? (
          <StatsProfileInfo
            email={userProfile.user.email}
            name={userProfile.user.name}
            role="User"
          />
        ) : (
          "Loading"
        )}
      </Desktop>

      {/*STATS*/}
      <StatsToday />
      <StatsAccount />
    </Container>
  );
};

export default Stats;
