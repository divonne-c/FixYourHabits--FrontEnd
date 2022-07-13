import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Container, HabitMenuContainer } from "./DeleteHabit.styles";
import { Mobile } from "../../../styles - global/media/MediaQueryDisplay";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";

const DeleteHabits = ({ role, id }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { renderData, setRenderData } = useContext(AuthContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const deleteHabit = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios
        .delete(`http://localhost:8080/${role}habits/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
      // setNotifications([
      //   ...notifications,
      //   { type: "success", message: "You successfully deleted a new habit" },
      // ]);
    } catch (error) {
      console.log(error);
      // setNotifications([...notifications, { type: "error", message: error }]);
    }
  };

  return (
    <>
      <HabitMenuContainer>
        <button onClick={show}>
          <span className="container">
            <span className="material-symbols-outlined delete">delete</span>
            <Mobile>
              <p>Delete habit</p>
            </Mobile>
          </span>
        </button>

        {showModal && (
          <ModalSmall>
            <p>Are you sure you want to delete this habit?</p>
            <Container>
              <ButtonFourth onClick={show}>Cancel</ButtonFourth>
              <ButtonThird type="submit" onClick={deleteHabit}>
                Delete
              </ButtonThird>
            </Container>
          </ModalSmall>
        )}
      </HabitMenuContainer>
    </>
  );
};

export default DeleteHabits;
