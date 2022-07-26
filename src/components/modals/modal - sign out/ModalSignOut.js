import React from "react";
import ReactDOM from "react-dom";
import { Container } from "../modal - small/ModalSmall.styles";

const ModalSignOut = ({ children }) => {
  return ReactDOM.createPortal(
    <Container>
      <div className="modal">
        <div className="element">{children}</div>
      </div>
    </Container>,
    document.getElementById("portal")
  );
};

export default ModalSignOut;
