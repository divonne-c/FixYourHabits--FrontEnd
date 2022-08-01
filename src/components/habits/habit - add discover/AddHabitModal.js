import React, { useState } from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import AddAdminHabit from "./AddAdminHabit";
import {
  ButtonFourth,
  ButtonSecondary,
} from "../../../globalstyles/ButtonStyles";
import { Container } from "./AddHabitModal.styles";
import { Desktop, Mobile } from "../../../globalstyles/MediaQueryDisplay";

const AddHabitModal = ({ habit, habitColor }) => {
  const [showModal, toggleShowModal] = useState(false);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
  };

  return (
    <>
      <div className="complete-btn large-element">
        <Desktop>
          <ButtonSecondary onClick={showModalHandler}>
            Add Habit
          </ButtonSecondary>
        </Desktop>
      </div>

      <Mobile>
        <div className={`add-button-mobile ${habitColor}`}>
          <ButtonSecondary onClick={showModalHandler}>+</ButtonSecondary>
        </div>
      </Mobile>

      {showModal && (
        <ModalSmall>
          <Container>
            <p>Are you sure you want to add this habit?</p>
            <div className="buttons">
              <ButtonFourth type="button" onClick={showModalHandler}>
                Cancel
              </ButtonFourth>
              <AddAdminHabit
                habit={habit}
                toggleShowModal={toggleShowModal}
                showModal={showModal}
              />
            </div>
          </Container>
        </ModalSmall>
      )}
    </>
  );
};

export default AddHabitModal;
