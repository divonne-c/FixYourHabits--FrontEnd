import ModalSmall from "../../modals/modal - small/ModalSmall";
import {
  Desktop,
  MobileWHeight,
} from "../../../globalstyles/MediaQueryDisplay";
import { ButtonFourth } from "../../../globalstyles/ButtonStyles";
import { Container } from "./Menu.styles";

const Menu = ({ children, show, reward }) => {
  return (
    <Container>
      {/*----- DESKTOP -----*/}
      <Desktop>
        <div className="container">
          <div className={`button-container ${reward}`}>{children}</div>
        </div>
      </Desktop>

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
