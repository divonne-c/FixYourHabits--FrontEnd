import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import MenuButton from "../../habit - reward/menu buttons/MenuButton";
import DeleteModal from "../../habit - reward/delete/DeleteModal";

const DeleteHabits = ({ role, id, toggleShowMenu, showMenu, show }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const showModalHandler = () => {
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
      setNotifications([
        ...notifications,
        {
          type: "error",
          message:
            "Something went wrong with deleting the habit. Please try again.",
        },
      ]);
    }

    toggleShowMenu(!showMenu);
  };

  return (
    <>
      {/*----- DELETE BUTTON -----*/}
      <MenuButton handler={showModalHandler} name="delete" />

      {/*----- MODAL -----*/}
      {showModal && (
        <DeleteModal show={show} handler={deleteHabit} type="habit" />
      )}
    </>
  );
};

export default DeleteHabits;
