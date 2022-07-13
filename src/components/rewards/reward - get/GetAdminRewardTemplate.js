import React from "react";
import { Container, Reward } from "./GetReward.styles";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/media/MediaQueryDisplay";
import { ContainerMobile } from "../../habits/habit - get/GetHabits.styles";

const GetAdminRewardTemplate = ({ reward }) => {
  return (
    <>
      <Container>
        <Desktop>
          <div className={`${reward.name}`}>
            <Reward>
              <span className="material-symbols-outlined reward-icon">
                workspace_premium
              </span>
              <h4>{reward.name}</h4>
              <p>{reward.description}</p>
            </Reward>
          </div>
        </Desktop>

        <Mobile>
          <ContainerMobile>
            <div className={`${reward.name}`}>
              <Reward>
                <span className="material-symbols-outlined reward-icon">
                  workspace_premium
                </span>
                <h4>{reward.name}</h4>
                <p>{reward.description}</p>
              </Reward>
            </div>
          </ContainerMobile>
        </Mobile>
      </Container>
    </>
  );
};

export default GetAdminRewardTemplate;
