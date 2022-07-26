import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./Modal.styles";

const Modal = ({ title, children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <div className="modal">
        <div className="element">
          <h1>{title}</h1>
          <div>{children}</div>
        </div>
      </div>
    </ModalContainer>,
    document.getElementById("portal")
  );
};

export default Modal;
