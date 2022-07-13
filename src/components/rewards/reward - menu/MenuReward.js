import React, { useState } from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import DeleteReward from "../reward - delete/DeleteReward";
import UpdateReward from "../reward - update/UpdateReward";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import { ButtonHabitMenu, Container } from "./MenuReward.styles";
import { MenuContainer } from "../../../styles - global/utilities/HabitAndReward.styles";

const MenuReward = ({ reward }) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <MenuContainer>
      <ButtonHabitMenu onClick={show}>
        {!showMenu ? (
          <span className="material-symbols-outlined">more_horiz</span>
        ) : (
          <span className="material-symbols-outlined">close</span>
        )}
      </ButtonHabitMenu>
      {showMenu && (
        <>
          <DesktopWHeight>
            <div className="test">
              <div className="button-container reward">
                <UpdateReward
                  reward={reward}
                  show={show}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                />
                <DeleteReward reward={reward} />
              </div>
            </div>
          </DesktopWHeight>

          <MobileWHeight>
            <ModalSmall>
              <div className="button-container-mobile">
                <UpdateReward
                  reward={reward}
                  show={show}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                />
                <DeleteReward reward={reward} />
              </div>
              <div className="cancel-button-container">
                <ButtonFourth onClick={show}>Cancel</ButtonFourth>
              </div>
            </ModalSmall>
          </MobileWHeight>
        </>
      )}
    </MenuContainer>
  );
};

export default MenuReward;
