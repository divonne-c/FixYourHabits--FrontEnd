import React, { useContext, useEffect } from "react";
import moment from "moment";
import { ProfileContext } from "../../../context/ProfileContext";
import StatsAccountTemplate from "./StatsAccountTemplate";
import { Container } from "./StatsAccount.styles";

const StatsAccount = () => {
  const { userProfile } = useContext(ProfileContext);
  const start = moment(userProfile.userStartDate).format("YYYY-MM-DD");
  const daysActive = moment().diff(start, "days");

  useEffect(() => {
    userProfile.userHabits &&
      userProfile.userHabits.map((habit) => {
        if (
          habit.completed &&
          userProfile.totalCompletedHabits < userProfile.userHabits.length
        ) {
          userProfile.totalCompletedHabits++;
        } else if (
          userProfile.totalCompletedHabits > 0 &&
          habit.completed === false
        ) {
          userProfile.totalCompletedHabits--;
        }
      });
  }, [userProfile.userHabits, userProfile]);

  return (
    <Container>
      <StatsAccountTemplate
        title="Days active"
        number={daysActive}
        className="orange-dark"
      />
      <StatsAccountTemplate
        title="Total Completed"
        number={userProfile && userProfile.totalCompletedHabits}
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
