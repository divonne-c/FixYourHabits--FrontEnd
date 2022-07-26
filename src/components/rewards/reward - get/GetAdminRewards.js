import React, { useContext } from "react";
import GetAdminRewardTemplate from "./GetAdminRewardTemplate";
import MenuReward from "../reward - menu/MenuReward";
import { RewardColor } from "./GetReward.styles";
import { ProfileContext } from "../../../context/ProfileContext";
import { GetContainer } from "../../habit - reward/HabitAndReward.styles";

const GetAdminRewards = () => {
  const { adminRewards } = useContext(ProfileContext);

  return (
    <GetContainer>
      {adminRewards &&
        adminRewards.map((reward) => {
          return (
            <div key={reward.id} className="container-mobile">
              <MenuReward reward={reward} />
              <RewardColor>
                <div
                  className={`${reward.type}
                   reward-icon`}
                >
                  <GetAdminRewardTemplate reward={reward} />
                </div>
              </RewardColor>
            </div>
          );
        })}
    </GetContainer>
  );
};

export default GetAdminRewards;
