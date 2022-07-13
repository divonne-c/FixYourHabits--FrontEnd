import React, { useContext, useState } from "react";
import GetAdminRewardTemplate from "./GetAdminRewardTemplate";
import { Container, RewardColor } from "./GetReward.styles";
import MenuReward from "../reward - menu/MenuReward";
import { ProfileContext } from "../../../context/ProfileContext";

const GetAdminRewards = () => {
  const { adminRewards } = useContext(ProfileContext);

  return (
    <Container>
      {adminRewards &&
        adminRewards.map((reward) => {
          return (
            <div key={reward.id} className="rewards-container-mobile">
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
    </Container>
  );
};

export default GetAdminRewards;
