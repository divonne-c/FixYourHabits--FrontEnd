import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { MobileWHeight } from "../../../styles - global/global/MediaQueryDisplay";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import {
  MenuButtonContainer,
  ModalButtons,
} from "../../../styles - global/utilities/HabitAndReward.styles";

const DeleteHabits = ({ role, id }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const deleteHabit = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/${role}habits/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully deleted the habit" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }
  };

  return (
    <>
      <MenuButtonContainer>
        {/*----- BUTTON -----*/}
        <button onClick={show}>
          <span className="container">
            <span className="material-symbols-outlined delete">delete</span>
            <MobileWHeight>
              <p>Delete</p>
            </MobileWHeight>
          </span>
        </button>

        {/*----- MODAL -----*/}
        {showModal && (
          <ModalSmall>
            <p>Are you sure you want to delete this habit?</p>
            <ModalButtons>
              <ButtonFourth onClick={show}>Cancel</ButtonFourth>
              <ButtonThird type="submit" onClick={deleteHabit}>
                Delete
              </ButtonThird>
            </ModalButtons>
          </ModalSmall>
        )}
      </MenuButtonContainer>
    </>
  );
};

export default DeleteHabits;
