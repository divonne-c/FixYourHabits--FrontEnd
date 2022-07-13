import React, { useState } from "react";
import { Container, Info } from "./RewardInfo.styles";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { RewardIconColor } from "../reward - get/GetReward.styles";

const RewardInfo = ({ reward }) => {
  const [showModal, toggleShowModal] = useState(false);

  const show = () => {
    toggleShowModal(!showModal);
  };

  return (
    <Container>
      <div className={`${reward.type} reward-icon`}>
        <button onClick={show}>
          <span className="material-symbols-outlined">workspace_premium</span>
        </button>
      </div>

      {showModal && (
        <ModalSmall>
          <Info>
            <h2>Info award</h2>
            <p>{reward.description}</p>
            <ButtonFourth onClick={show}>Close</ButtonFourth>
          </Info>
        </ModalSmall>
      )}
    </Container>
  );
};

export default RewardInfo;
