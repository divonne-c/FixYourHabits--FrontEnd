import React, { useState } from "react";
import { ButtonHabitMenu, Container } from "./MenuHabit.styles";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/media/MediaQueryDisplay";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import UpdateHabit from "../habit - update/UpdateHabit";
import DeleteHabits from "../habit - delete/DeleteHabits";

const MenuHabit = ({ habit, role }) => {
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
                <UpdateHabit
                  habit={habit}
                  role={role}
                  toggleShowMenu={toggleShowMenu}
                  showMenu={showMenu}
                  show={show}
                />
                <DeleteHabits role={role} id={habit.id} />
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

export default MenuHabit;
