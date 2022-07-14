import React from "react";
import { Container, Reward } from "./GetReward.styles";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";
import { ContainerMobile } from "../../habits/habit - get/GetHabits.styles";
import {
  Element,
  GetContainer,
} from "../../habit - reward/HabitAndReward.styles";

const GetAdminRewardTemplate = ({ reward }) => {
  return (
    <GetContainer>
      {/*----- DESKTOP ------*/}
      <DesktopWHeight>
        <div className={`${reward.name}`}>
          <div className="reward">
            <Element>
              <span className="material-symbols-outlined reward-icon">
                workspace_premium
              </span>
              <h4>{reward.name}</h4>
              <p>{reward.description}</p>
            </Element>
          </div>
        </div>
      </DesktopWHeight>

      {/*----- MOBILE ------*/}
      <MobileWHeight>
        <ContainerMobile>
          <div className={`${reward.name}`}>
            <Element>
              <span className="material-symbols-outlined reward-icon">
                workspace_premium
              </span>
              <h4>{reward.name}</h4>
              <p>{reward.description}</p>
            </Element>
          </div>
        </ContainerMobile>
      </MobileWHeight>
    </GetContainer>
  );
};

export default GetAdminRewardTemplate;
