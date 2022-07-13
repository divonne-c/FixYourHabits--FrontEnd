import React from "react";
import StatsAdminAccount from "./StatsAdminAccount";
import StatsAdminProfile from "./StatsAdminProfile";
import CreateHabit from "../../habits/habit - create/CreateHabit";
import CreateReward from "../../rewards/reward - create/CreateReward";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";

const StatsAdmin = () => {
  return (
    <>
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>
        <StatsAdminProfile />
        <StatsAdminAccount />
        <CreateReward />
        <CreateHabit role="admin" profile="adminProfile">
          Create Habit
        </CreateHabit>
      </DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <StatsAdminAccount />
        <CreateReward />
      </MobileWHeight>
    </>
  );
};

export default StatsAdmin;
