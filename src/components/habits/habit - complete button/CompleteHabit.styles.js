import styled from "styled-components";
import { ButtonPrimary } from "../../../styles - global/global/ButtonStyles";

export const CompleteButton = styled(ButtonPrimary)`
  border-radius: 5px;
  padding: var(--padding-s);

  @media (max-width: 1024px) {
    background-color: transparent;

    input[type="checkbox"] {
      transform: scale(1.5);
      position: relative;
      cursor: pointer;
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--color-white-background);
      z-index: 1;
    }

    .checked input[type="checkbox"]:before,
    input[type="checkbox"]:hover:before {
      font-family: "Material Icons";
      content: "\\e876";
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-orange);
      color: var(--color-white);
    }
  }
`;
