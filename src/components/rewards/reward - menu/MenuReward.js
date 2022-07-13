import React, { useState } from "react";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/media/MediaQueryDisplay";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import { ButtonHabitMenu, Container } from "./MenuReward.styles";
import DeleteReward from "../reward - delete/DeleteReward";
import UpdateReward from "../reward - update/UpdateReward";

const MenuReward = ({ reward }) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <Container>
      <ButtonHabitMenu onClick={show}>
        {!showMenu ? (
          <span className="material-symbols-outlined">more_horiz</span>
        ) : (
          <span className="material-symbols-outlined">close</span>
        )}
      </ButtonHabitMenu>
      {showMenu && (
        <>
          <Desktop>
            <div className="test">
              <div className="button-container">
                <UpdateReward
                  reward={reward}
                  show={show}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                />
                <DeleteReward reward={reward} />
              </div>
            </div>
          </Desktop>

          <Mobile>
            <ModalSmall>
              <div className="button-container-mobile">
                <h1>menu</h1>
              </div>
              <div className="cancel-button-container">
                <ButtonFourth onClick={show}>Cancel</ButtonFourth>
              </div>
            </ModalSmall>
          </Mobile>
        </>
      )}
    </Container>
  );
};

export default MenuReward;
