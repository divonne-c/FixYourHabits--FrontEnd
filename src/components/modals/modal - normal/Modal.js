import React from "react";
import { ModalContainer } from "./Modal.styles";

const Modal = ({ title, children }) => {
  return (
    <ModalContainer>
      <div className="modal">
        <div className="element">
          <h1>{title}</h1>
          <div>{children}</div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
