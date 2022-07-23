import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ModalSmall from "../modals/modal - small/ModalSmall";
import ModalButtons from "../modals/modal - buttons/ModalButtons";
import { ButtonThird } from "../../styles - global/global/ButtonStyles";

const DeleteAccount = () => {
  const [showModal, toggleShowModal] = useState(false);
  const {
    auth,
    setRenderData,
    renderData,
    logout,
    setNotifications,
    notifications,
  } = useContext(AuthContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const deleteAccountHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/users/${auth.user.username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      logout();
      setNotifications([
        ...notifications,
        {
          type: "success",
          message: "You account is deleted successfully.",
        },
      ]);
    } catch (error) {
      console.error(error);
      setNotifications([
        ...notifications,
        {
          type: "error",
          message:
            "Something went wrong with deleting your account. Please try it again.",
        },
      ]);
    }
  };

  return (
    <>
      <ButtonThird type="button" onClick={show}>
        Delete
      </ButtonThird>

      {showModal && (
        <ModalSmall>
          <p>
            Are you sure you want to delete your account? It is not possible to
            restore your account after this.
          </p>
          <ModalButtons
            show={show}
            handler={deleteAccountHandler}
            buttonText="Delete"
          />
        </ModalSmall>
      )}
    </>
  );
};

export default DeleteAccount;
