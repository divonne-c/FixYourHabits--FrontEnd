import React from "react";
import { Container, Reward } from "./GetReward.styles";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";
import { ContainerMobile } from "../../habits/habit - get/GetHabits.styles";

const GetAdminRewardTemplate = ({ reward }) => {
  return (
    <>
      <Container>
        <DesktopWHeight>
          <div className={`${reward.name}`}>
            <Reward>
              <span className="material-symbols-outlined reward-icon">
                workspace_premium
              </span>
              <h4>{reward.name}</h4>
              <p>{reward.description}</p>
            </Reward>
          </div>
        </DesktopWHeight>

        <MobileWHeight>
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
        </MobileWHeight>
      </Container>
    </>
  );
};

export default GetAdminRewardTemplate;
