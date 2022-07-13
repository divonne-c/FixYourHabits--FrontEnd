import React, { useState } from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import UpdateHabit from "../habit - update/UpdateHabit";
import DeleteHabits from "../habit - delete/DeleteHabits";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import {
  MenuButtons,
  MenuContainer,
} from "../../../styles - global/utilities/HabitAndReward.styles";

const MenuHabit = ({ habit, role }) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <MenuContainer>
      {/*----- HABIT MENU BUTTONS-----*/}
      <MenuButtons onClick={show}>
        {!showMenu ? (
          <span className="material-symbols-outlined">more_horiz</span>
        ) : (
          <span className="material-symbols-outlined">close</span>
        )}
      </MenuButtons>

      {/*----- HABIT MENU -----*/}
      {showMenu && (
        <>
          <DesktopWHeight>
            <div className="test">
              <div className="button-container">
                {/*UPDATE HABIT*/}
                <UpdateHabit
                  habit={habit}
                  role={role}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                  show={show}
                />

                {/*DELETE HABIT*/}
                <DeleteHabits role={role} id={habit.id} />
              </div>
            </div>
          </DesktopWHeight>

          <MobileWHeight>
            <ModalSmall>
              <div className="button-container-mobile">
                {/*UPDATE HABIT*/}
                <UpdateHabit
                  habit={habit}
                  role={role}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                  show={show}
                />

                {/*DELETE HABIT*/}
                <DeleteHabits role={role} id={habit.id} />
              </div>

              {/*CANCEL BUTTON*/}
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

export default MenuHabit;
