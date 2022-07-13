import React, { useContext } from "react";
import moment from "moment";
import { ProfileContext } from "../../../context/ProfileContext";
import TotalCompletedHabits from "../stats - total completed habits/TotalCompletedHabits";
import StatsAccountTemplate from "./StatsAccountTemplate";
import { Container } from "./StatsAccount.styles";

const StatsAccount = () => {
  const { userProfile } = useContext(ProfileContext);
  const start = moment(userProfile.userStartDate).format("YYYY-MM-DD");
  const daysActive = moment().diff(start, "days");

  return (
    <Container>
      <StatsAccountTemplate
        title="Days active"
        number={daysActive}
        className="orange-dark"
      />
      <StatsAccountTemplate
        title="Total Completed"
        number={<TotalCompletedHabits />}
        className="pink-dark"
      />
      <StatsAccountTemplate
        title="Total Habits"
        number={userProfile && userProfile.totalHabits}
        className="pink-light"
      />
      <StatsAccountTemplate
        title="Rewards"
        number={userProfile.userRewards && userProfile.userRewards.length}
        className="orange-light"
      />
    </Container>
  );
};

export default StatsAccount;
