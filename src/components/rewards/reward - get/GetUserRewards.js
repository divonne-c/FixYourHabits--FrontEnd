import React, { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import { Card } from "../../../styles - global/cards/CardHome";
import { Container } from "./GetUserRewards.styles";
import RewardInfo from "../reward - info modal/RewardInfo";

const GetUserRewards = () => {
  const { userProfile } = useContext(ProfileContext);

  return (
    <Container>
      <h2>Rewards</h2>
      <Card>
        <div className="reward-container">
          {userProfile.userRewards &&
            userProfile.userRewards.map((reward) => {
              return (
                <div key={reward.id}>
                  <RewardInfo reward={reward} />
                </div>
              );
            })}
        </div>
      </Card>
    </Container>
  );
};

export default GetUserRewards;
