import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../../context/ProfileContext";

const TotalCompletedHabits = () => {
  const { userProfile } = useContext(ProfileContext);

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

  return <div>{userProfile.totalCompletedHabits}</div>;
};

export default TotalCompletedHabits;
