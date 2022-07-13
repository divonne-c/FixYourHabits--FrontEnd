import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { MobileWHeight } from "../../../styles - global/global/MediaQueryDisplay";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import {
  MenuButtonContainer,
  ModalButtons,
} from "../../../styles - global/utilities/HabitAndReward.styles";

const DeleteReward = ({ reward }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const deleteReward = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/adminrewards/${reward.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully deleted the reward" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }
  };

  return (
    <>
      <MenuButtonContainer>
        <button onClick={show}>
          <span className="container">
            <span className="material-symbols-outlined delete">delete</span>
            <MobileWHeight>
              <p>Delete</p>
            </MobileWHeight>
          </span>
        </button>

        {showModal && (
          <ModalSmall>
            <p>Are you sure you want to delete this reward?</p>
            <ModalButtons>
              <ButtonFourth onClick={show}>Cancel</ButtonFourth>
              <ButtonThird type="submit" onClick={deleteReward}>
                Delete
              </ButtonThird>
            </ModalButtons>
          </ModalSmall>
        )}
      </MenuButtonContainer>
    </>
  );
};

export default DeleteReward;
