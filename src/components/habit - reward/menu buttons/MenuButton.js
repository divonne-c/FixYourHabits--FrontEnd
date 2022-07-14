import React from "react";
import { MobileWHeight } from "../../../styles - global/global/MediaQueryDisplay";
import { MenuButtonContainer } from "./MenuButton.styles";

const MenuButton = ({ handler, name }) => {
  return (
    <MenuButtonContainer>
      <button onClick={handler}>
        <span className="menu-button-container">
          <span className="material-symbols-outlined edit">{name}</span>
          <MobileWHeight>
            <p>{name}</p>
          </MobileWHeight>
        </span>
      </button>
    </MenuButtonContainer>
  );
};

export default MenuButton;
