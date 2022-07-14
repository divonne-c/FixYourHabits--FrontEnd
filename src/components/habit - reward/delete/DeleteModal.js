import React from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import ModalButtons from "../../modals/modal - buttons/ModalButtons";

const DeleteModal = ({ show, handler, type }) => {
  return (
    <ModalSmall>
      <p>Are you sure you want to delete this {type}?</p>
      <ModalButtons show={show} handler={handler} buttonText="Delete" />
    </ModalSmall>
  );
};

export default DeleteModal;
