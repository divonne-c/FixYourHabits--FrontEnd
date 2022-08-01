import React from "react";
import { Container } from "./SlideButtons.styles";
import { Desktop } from "../../globalstyles/MediaQueryDisplay";

const SlideButtons = ({ classname }) => {
  return (
    <Desktop>
      <Container>
        {/*LEFT BUTTON*/}
        <button
          className="slide-btn"
          onClick={() => {
            const el = document.querySelector(`.${classname}`);
            el.scrollLeft -= 650;
          }}
        >
          <span className="material-symbols-outlined">keyboard_backspace</span>
        </button>

        {/*RIGHT BUTTON*/}
        <button
          className="slide-btn right-btn"
          onClick={() => {
            const el = document.querySelector(`.${classname}`);
            el.scrollLeft += 650;
          }}
        >
          <span className="material-symbols-outlined">trending_flat</span>
        </button>
      </Container>
    </Desktop>
  );
};

export default SlideButtons;
