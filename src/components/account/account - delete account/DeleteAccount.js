import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import { Container } from "./DeleteAccount.styles";

const DeleteAccount = () => {
  const [showModal, toggleShowModal] = useState(false);
  const { auth, setRenderData, renderData, logout } = useContext(AuthContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const deleteAccountHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios
        .delete(`http://localhost:8080/users/${auth.user.username}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ButtonThird type="button" onClick={show}>
        Delete
      </ButtonThird>

      {showModal && (
        <ModalSmall>
          <p>
            Are you sure you want to delete your account? It is not possible to
            restore your account after this.
          </p>
          <div className="button-container">
            <ButtonFourth type="button" onClick={show}>
              Cancel
            </ButtonFourth>
            <ButtonThird type="button" onClick={deleteAccountHandler}>
              Delete
            </ButtonThird>
          </div>
        </ModalSmall>
      )}
    </Container>
  );
};

export default DeleteAccount;
