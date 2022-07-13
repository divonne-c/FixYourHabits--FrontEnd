import React, { useContext, useState } from "react";
import axios from "axios";
import { MobileWHeight } from "../../../styles - global/global/MediaQueryDisplay";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "../../modals/modal - normal/Modal";
import FormHabit from "../habit - form/FormHabit";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import { Form } from "../habit - form/FormHabit.styles";
import {
  MenuButtonContainer,
  ModalButtons,
} from "../../../styles - global/utilities/HabitAndReward.styles";

const UpdateHabit = ({ habit, role, toggleShowMenu, showMenu, show }) => {
  const [updatedHabit, setUpdatedHabit] = useState({
    name: habit.name,
    type: habit.type,
    description: habit.description,
    completed: habit.completed,
  });
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
  };

  const nameChangeHandler = (event) => {
    setUpdatedHabit({ ...updatedHabit, name: event.target.value });
  };

  const typeChangeHandler = (event) => {
    setUpdatedHabit({ ...updatedHabit, type: event.target.value });
  };

  const descriptionChangeHandler = (event) => {
    setUpdatedHabit({ ...updatedHabit, description: event.target.value });
  };

  const updateHabitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: updatedHabit.name,
      type: updatedHabit.type,
      completed: updatedHabit.completed,
      description: updatedHabit.description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(`http://localhost:8080/${role}habits/${habit.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully updated the habit" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }

    toggleShowModal(!showModal);
    toggleShowMenu(!showMenu);
  };

  return (
    <>
      {/*----- BUTTON -----*/}
      <MenuButtonContainer>
        <button onClick={showModalHandler}>
          <span className="container">
            <span className="material-symbols-outlined edit">edit</span>
            <MobileWHeight>
              <p>Edit</p>
            </MobileWHeight>
          </span>
        </button>
      </MenuButtonContainer>

      {/*----- MODAL ------*/}
      {showModal && (
        <Modal title="Edit Habit">
          {/*FORM*/}
          <Form onSubmit={updateHabitHandler}>
            <FormHabit
              nameHabit={updatedHabit.name}
              typeChangeHandler={typeChangeHandler}
              nameChangeHandler={nameChangeHandler}
              descriptionChangeHandler={descriptionChangeHandler}
              description={updatedHabit.description}
            />

            {/*MODAL BUTTONS*/}
            <ModalButtons>
              <ButtonFourth type="button" onClick={show}>
                Cancel
              </ButtonFourth>
              <ButtonThird type="submit">Save</ButtonThird>
            </ModalButtons>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default UpdateHabit;
