import React from "react";
import { DotsButton } from "./MenuButton.styles";

const DotsMenuButton = ({ show, showMenu }) => {
  return (
    <DotsButton onClick={show}>
      {!showMenu ? (
        <span className="material-symbols-outlined">more_horiz</span>
      ) : (
        <span className="material-symbols-outlined">close</span>
      )}
    </DotsButton>
  );
};

export default DotsMenuButton;
