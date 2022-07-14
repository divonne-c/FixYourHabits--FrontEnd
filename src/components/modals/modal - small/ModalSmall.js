import React from "react";
import { Container } from "./ModalSmall.styles";

const ModalSmall = ({ children }) => {
  return (
    <Container>
      <div className="modal">
        <div className="element">{children}</div>
      </div>
    </Container>
  );
};

export default ModalSmall;
