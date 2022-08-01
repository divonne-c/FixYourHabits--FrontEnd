import React from "react";
import { ButtonFourth, ButtonThird } from "../../../globalstyles/ButtonStyles";
import { Container } from "./ModalButtons.styles";

const ModalButtons = ({ show, handler, buttonText }) => {
  return (
    <Container>
      <ButtonFourth type="button" onClick={show}>
        Cancel
      </ButtonFourth>
      <ButtonThird type="submit" onClick={handler}>
        {buttonText}
      </ButtonThird>
    </Container>
  );
};

export default ModalButtons;
