import React, { useState } from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { Container, Info } from "./RewardInfo.styles";
import { ButtonFourth } from "../../../globalstyles/ButtonStyles";
import { RewardIconColor } from "../reward - get/GetReward.styles";

const RewardInfo = ({ reward }) => {
  const [showModal, toggleShowModal] = useState(false);

  const show = () => {
    toggleShowModal(!showModal);
  };

  return (
    <RewardIconColor>
      <Container>
        {/*----- REWARD BUTTON -----*/}
        <div className={`${reward.type} reward-icon`}>
          <button onClick={show}>
            <span className="material-symbols-outlined">workspace_premium</span>
          </button>
        </div>

        {/*----- MODAL -----*/}
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
    </RewardIconColor>
  );
};

export default RewardInfo;
