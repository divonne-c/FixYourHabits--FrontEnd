import React from "react";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";
import { ButtonFourth } from "../../../styles - global/global/ButtonStyles";
import { Container } from "./Menu.styles";

const Menu = ({ children, show, reward }) => {
  return (
    <Container>
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>
        <div className="container">
          <div className={`button-container ${reward}`}>{children}</div>
        </div>
      </DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <ModalSmall>
          <div className="button-container-mobile">{children}</div>

          {/*CANCEL BUTTON*/}
          <div className="cancel-button-container">
            <ButtonFourth onClick={show}>Cancel</ButtonFourth>
          </div>
        </ModalSmall>
      </MobileWHeight>
    </Container>
  );
};

export default Menu;
